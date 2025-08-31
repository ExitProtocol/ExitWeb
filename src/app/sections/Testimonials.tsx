'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "🚀",
    title: "1 Million+ Users by Design",
    description: "$EXIT is engineered to scale seamlessly to over 1 million concurrent users via stateless infrastructure and AI-optimized routing.",
  },
  {
    icon: "⚡",
    title: "Sub-0.01¢ Transaction Fees",
    description: "Near-zero gas cost through ZK rollup compression and fee-splitting mechanisms on cross-chain bridges.",
  },
  {
    icon: "📈",
    title: "$10B Volume Potential",
    description: "With stealth-enabled DeFi modules and cross-chain liquidity routes, $EXIT is built for high-velocity, high-volume anonymity-preserving transactions.",
  },
  {
    icon: "🔐",
    title: "4 Privacy Modes, One Chain",
    description: "Choose your opacity — from lightweight stealth to full multi-hop obfuscation, dynamically managed by EXIT//AI.",
  },
  {
    icon: "🧠",
    title: "100M+ Threat Scenarios Trained",
    description: "EXIT//AI learns from real-time network traffic, countering surveillance and adaptive attack vectors with predictive defense logic.",
  },
  {
    icon: "🌍",
    title: "150+ Countries Supported",
    description: "Chain-agnostic deployment with censorship-resistant mesh relays ensures $EXIT is operable in any geopolitical zone.",
  },
  {
    icon: "⏱️",
    title: "<200ms Finality",
    description: "Using stateless consensus and parallel zk-execution threads, $EXIT transactions finalize faster than legacy L1 chains.",
  },
  {
    icon: "🧩",
    title: "Modular for Developers, Invisible for Users",
    description: "Plug-and-play SDKs and privacy APIs allow seamless integration into dApps, wallets, and DAOs — no privacy tradeoffs required.",
  },
  {
    icon: "🛰️",
    title: "Offline Sync Capable",
    description: "With LoRaWAN + DarkMesh™ support, $EXIT can operate in fully offline environments and sync securely when reconnected.",
  },
];

const groupIntoColumns = (arr: Feature[], num: number): Feature[][] => {
  const columns: Feature[][] = Array.from({ length: num }, () => []);
  arr.forEach((item, i) => {
    columns[i % num].push(item);
  });
  return columns;
};

type FeatureColumnProps = {
  features: Feature[];
  duration?: number;
  className?: string;
};

const FeatureColumn = ({ features, duration = 25, className = '' }: FeatureColumnProps) => (
  <div className={`flex-1 ${className}`}>
    <motion.div
      animate={{ y: '-50%' }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...Array(2)].map((_, i) => (
        <React.Fragment key={i}>
          {features.map(({ icon, title, description }, index) => (
            <div
              key={`${title}-${index}`}
              className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
              <p className="text-sm text-gray-700 leading-snug">{description}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  const [col1, col2, col3] = groupIntoColumns(features, 3);

  return (
    <section className="py-24 md:px-22 bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Ortalanmış $EXIT etiketi */}
        <div className="flex justify-center">
          <div className="tag">$EXIT</div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-5">
          <h1 className="section-title mt-5">
            Numbers Don’t Lie. Privacy is in Demand.
          </h1>
          <p className="section-description mt-5">
            The next-gen privacy infrastructure, engineered for real adoption.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-14 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[738px] overflow-hidden">
          <FeatureColumn features={col1} duration={30} />
          <FeatureColumn features={col2} duration={24} className="hidden md:flex" />
          <FeatureColumn features={col3} duration={15} className="hidden lg:flex" />
        </div>
      </div>
    </section>
  );
};
