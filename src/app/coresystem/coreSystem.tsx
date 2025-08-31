'use client';

import '@/app/about/about.css'; // grid-bg, particles-bg, noise-bg gibi efektleri içeriyor
import { motion } from 'framer-motion';

export default function CoreSystems() {
  return (
    <main className="bg-black text-[#BCBCBC] min-h-screen py-24 px-6 font-mono relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full particles-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full noise-bg z-0" />

      <div className="container max-w-4xl mx-auto z-10 relative">
        <motion.h1
          className="text-white text-3xl md:text-4xl font-bold tracking-wide mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Built to Vanish. Engineered to Endure.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#BCBCBC] mb-12 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Every line of code in $EXIT is designed for one purpose: absolute control over your privacy and digital sovereignty. Here’s what powers the world’s most advanced exit protocol:
        </motion.p>

        <ul className="space-y-6 text-base md:text-lg">
          {[
            {
              title: "ZK-Proof Engine",
              desc: "Zero-Knowledge technology for verifiable anonymity."
            },
            {
              title: "AI-Powered Threat Avoidance",
              desc: "Machine learning models trained on over 1.2M attack vectors."
            },
            {
              title: "Layer-0 Architecture",
              desc: "Chain-agnostic compatibility with Ethereum, Solana, Polkadot, and more."
            },
            {
              title: "Modular Privacy Stack",
              desc: "Combine or disable features based on threat level."
            },
            {
              title: "Encrypted Routing Mesh",
              desc: "Decentralized traffic anonymization protocol (v0.8)."
            },
            {
              title: "Self-Upgrading Smart Contracts",
              desc: "Built-in logic evolution without central control."
            }
          ].map((item, idx) => (
            <motion.li
              key={idx}
              className="text-[#E0E0E0]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.15 }}
            >
              <span className="text-white font-semibold">{item.title}:</span>{' '}
              {item.desc}
            </motion.li>
          ))}
        </ul>
      </div>
    </main>
  );
}
