'use client';

import { Audiowide } from 'next/font/google';
import clsx from 'clsx';
import '@/app/about/about.css';
import '@/app/systemlogs/systemlog.css';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

const logs = [
  { date: '2025-01-03', message: 'Initial concept whitepaper completed, focus on zk-STARKs + adaptive AI fusion.' },
  { date: '2025-01-15', message: 'Git repo initialized, internal zero-knowledge PoC benchmarks conducted.'},
  { date: '2025-02-02', message: 'Core dev team assembled across 4 countries (ex-SV cryptographers, AI/ML engineers).'},
  { date: '2025-02-27', message: 'EXIT//AI v0.5 prototype trained on 100K+ anonymized traffic logs.'},
  { date: '2025-03-20', message: 'First testnet zk transaction validated with sub-200ms proof verification.'},
  { date: '2025-04-04', message: 'EXIT Mesh™ v0.8 prototype deployed (onion + garlic hybrid routing live in internal network).'},
  { date: '2025-04--19', message: 'PhantomNet v1.2 (AI framework) achieves 97.9% anomaly detection accuracy.'},
  { date: '2025-05-10', message: 'Smart contract suite deployed to Ethereum testnet; 11/12 audit checks passed.'},
  { date: '2025-06-01', message: 'ZK-Proof Engine upgraded to STARKv2.1' },
  { date: '2025-06-08', message: 'EXIT//AI threat vectors expanded by 200K+' },
  { date: '2025-06-12', message: 'Cross-chain masking alpha testing began on Solana and Substrate.'},
  { date: '2025-06-16', message: 'ZKMail encrypted messenger hits internal alpha milestone.'},
];

export default function SystemLogs() {
  return (
    <section className="relative min-h-screen py-24 px-6 text-white overflow-hidden bg-black">
      {/* 🧱 Animated Grid Background */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full particles-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full noise-bg z-0" />

      {/* 🌐 Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className={clsx(audiowide.className, "text-4xl md:text-6xl font-bold text-white/80 mb-4")}>
          The Protocol Never Sleeps.
        </h1>
        <p className="text-lg text-white/90 mb-16 max-w-2xl">
          $EXIT evolves in real time. New layers, new partners, new threats detected, and neutralized.
        </p>

        <div className="flex">
          {/* 🚦 Timeline Column */}
          <div className="relative w-10 flex flex-col items-center mt-2">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#FFFFFF] to-[#171717] overflow-hidden z-0">
              {/* Pulse Line */}
              <div className="absolute left-0 w-full h-24 bg-white/40 blur-sm opacity-80 animate-pulse-slide z-10" />
            </div>
          </div>

          {/* 📄 Logs + Dots */}
          <div className="flex flex-col gap-28 ml-6 relative">
            {logs.map((log, index) => (
              <div key={index} className="relative pl-6">
                {/* Dot */}
                <div
                  className={clsx(
                    "absolute -left-0 top-2.5 w-4 h-4 rounded-full border border-[#171717] z-10",
                    index === logs.length - 1 ? "bg-white animate-blink" : "bg-white"
                  )}
                />
                {/* Bottom Line */}
                {index !== logs.length - 1 && (
                  <div className="absolute left-2 top-4 h-[6.5rem] w-[2px] bg-gradient-to-b from-white/40 to-[#171717] z-0" />
                )}
                {/* Log insert */}
                <div className="text-sm text-white/60 mb-1">{log.date}</div>
                <div className="text-lg text-white">{log.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
