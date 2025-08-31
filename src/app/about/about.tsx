'use client';

import { useEffect, useState, useRef } from 'react';
{/* import { cn } from '@/lib/utils'; // optional: classname utils*/}
import '@/app/about/about.css'; // custom styles (explained below)

const lines = [
  "$EXIT: Next-Gen Privacy Protocol Powered by Advanced AI and Zero-Knowledge Cryptography",
  "$EXIT is not just a cryptocurrency, it’s a privacy-first decentralized protocol designed to reclaim digital sovereignty in a hyper-surveilled world.",
  "Core Technologies & Features",
  "1. Zero-Knowledge Proofs (ZK-STARKs)",
  "$EXIT employs state-of-the-art zero-knowledge proofs to validate transactions without revealing any sensitive information. Our ZK-STARK implementation achieves sub-second proof generation and verification, ensuring both scalability and privacy with quantum-resistant cryptographic security.",
  "2. Multi-layer Encryption & Routing",
  "Utilizing a hybrid of onion routing and homomorphic encryption, $EXIT encrypts transaction metadata and routes all communications through a decentralized mesh network. This design eliminates metadata leakage and provides untraceable peer-to-peer transfers.",
  "3. AI-Driven Privacy Engine 'EXIT//AI'",
  "Our proprietary machine learning framework, EXIT//AI, is trained on over 100 million real-world network threat scenarios. It dynamically adapts routing paths, detects emerging threats, and automates countermeasures in real time. Key components include:",
  "I. Adaptive Threat Detection: Real-time anomaly detection using unsupervised learning models with 98% accuracy(trained on simulated + real net datasets).",
  "II. Reinforcement Learning Agents: Continuously improve transaction obfuscation strategies.",
  "III. Federated Learning: Ensures AI model updates without compromising user data privacy.",
  "4. Layer-Zero Trust Architecture",
  "Rejecting traditional layered blockchain trust models, $EXIT implements a Layer Zero Trust framework, ensuring no single point of failure. Key highlights:",
  "I. Chain-agnostic interoperability supporting Ethereum, Solana, Polygon, and emerging chains via quantum-safe bridges.",
  "II. Stateless node infrastructure distributed globally across IPFS, Arweave, and decentralized VPN networks to maximize uptime and resilience.",
  "III. Support for up to 50,000 transactions per second with sub-200ms finality via optimized consensus algorithms.",
  "Network & Infrastructure",
  "I. Decentralized Node Operation: Incentivized node operators run stateless execution clients designed for privacy-preserving validation without exposing transaction data.",
  "II. Quantum-Resistant Cryptography: All cryptographic primitives, including signature schemes and hash functions, are quantum-resistant, future-proofing the network against next-gen attacks.",
  "III. Modular Privacy Layers: Users can toggle privacy levels based on operational security needs, from lightweight encryption to full obfuscation with multi-hop relay.",
  "AI & Automation Integration",
  "EXIT//AI is tightly integrated into the core protocol stack to provide:",
  "I. Automated Threat Evasion: Dynamic re-routing and adaptive traffic shaping prevent correlation attacks and network fingerprinting.",
  "II. Self-Healing Security: Autonomous detection and isolation of compromised nodes within milliseconds.",
  "III. User Empowerment: Privacy dashboards powered by AI-driven risk assessment, giving users real-time insights and control.",
  "Development & Governance",
  "Built by a distributed collective of former Silicon Valley cryptographers, privacy researchers, and decentralized governance experts, $EXIT operates under:",
  "I. Decentralized Autonomous Organization (DAO) governance with quadratic voting to resist majority capture.",
  "II. Open-source smart contracts with formal verification and multi-sig wallets controlling protocol upgrades.",
  "III. Cross-jurisdictional development to enhance censorship resistance.",
  "Why $EXIT?",
  "I. Unparalleled Privacy: No metadata leakage, no traceable on-chain footprint.",
  "II. AI-Optimized Security: Adaptive, evolving defense mechanisms.",
  "III. Seamless Interoperability: Works transparently across multiple blockchains.",
  "IV. Massive Scalability: Handles high TPS with minimal latency and zero trade-offs on privacy.",
  "V. Future-Proof: Quantum-resistant, post-quantum cryptographic algorithms baked in from day one.",
  "$EXIT is not a mere token. It is the technical foundation of the next internet — private, autonomous, and unbreakable.",
  "Join us at the frontier of cryptographic innovation. Welcome to $EXIT -> THE FUTURE OF DIGITAL FREEDOM!",
];

function isHeading(line: string) {
  return (
    /^\d+\./.test(line) ||
    (/^[A-Z][\w\s/&$\-?!]+$/.test(line.trim()) && !line.trim().endsWith(':'))
  );
}

export default function AboutPage() {
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  // Typewriter logic
  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    const currentText = line.slice(0, charIndex + 1);

    const updatedLines = [...displayedLines];
    updatedLines[currentLine] = currentText;
    setDisplayedLines(updatedLines);

    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine]);

  // Terminal height sync with hidden measure div
  useEffect(() => {
    if (!terminalRef.current || !measureRef.current) return;
    const newHeight = measureRef.current.offsetHeight;
    terminalRef.current.style.height = `${newHeight}px`;
  }, [displayedLines]);

  return (
    <main className="bg-black min-h-screen py-24 px-6 font-mono relative overflow-hidden text-[#BCBCBC]">
      {/* BG Effects */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full particles-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full noise-bg z-0" />

      <div className="flex justify-center z-10 relative">
        {/* Actual Terminal Box */}
        <div
          ref={terminalRef}
          className="w-full max-w-4xl bg-[#0f0f0f]/80 border border-gray-700 rounded-xl p-6 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ minHeight: '60vh' }}
        >
          {displayedLines.map((line, i) => (
            <p
              key={i}
              className={`text-sm md:text-base leading-relaxed whitespace-pre-wrap mb-2 ${
                isHeading(lines[i])
                  ? 'text-white text-base font-bold tracking-wide mt-6 mb-3'
                  : ''
              }`}
            >
              {line}
              {i === currentLine && <span className="blinking-cursor">|</span>}
            </p>
          ))}
        </div>

        {/* Hidden Measure Box */}
        <div
          ref={measureRef}
          className="invisible absolute w-full max-w-4xl text-sm md:text-base leading-relaxed p-6 font-mono"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {displayedLines.map((line, i) => (
            <p
              key={i}
              className={`mb-2 ${
                isHeading(lines[i])
                  ? 'text-base font-bold tracking-wide mt-6 mb-3'
                  : ''
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
