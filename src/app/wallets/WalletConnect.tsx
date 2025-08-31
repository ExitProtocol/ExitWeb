'use client';

import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import clsx from "clsx";
import { useRouter } from 'next/navigation'; // ✅ ROUTER
import { Audiowide } from 'next/font/google';

import '@/app/about/about.css'; // grid-bg, particles-bg, noise-bg

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const wallets = [
  { name: "Exodus", icon: "/exodus.png" },
  { name: "MetaMask", icon: "/metamask.png" },
  { name: "Phantom", icon: "/phantom.svg" },
  { name: "Zengo", icon: "/zengo.png" },
];

export const WalletConnect = () => {
  const [activeWallet, setActiveWallet] = useState<string | null>(null);
  const [address, setAddress] = useState("");
  const router = useRouter(); // ✅ ROUTER HOOK

  return (
    <section className="relative min-h-screen py-20 px-4 text-white overflow-hidden font-mono">
      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/99 z-10" />

      {/* 🧱 Static Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg z-10" />
      <div className="absolute top-0 left-0 w-full h-full particles-bg z-10" />
      <div className="absolute top-0 left-0 w-full h-full noise-bg z-10" />

      {/* 🌐 Content Layer */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <h2 className={`${audiowide.className} text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg mt-6`}>
          Connect Your Wallet
        </h2>
        <p className="text-lg md:text-xl text-white/90 tracking-tight mt-6">
          Securely link your preferred crypto wallet and join the $EXIT movement. No signups. No tracking. Just access.
        </p>
        {/*<h1 className={`${audiowide.className} text-4xl md:text-6xl font-bold tracking-tight text-[#6084F1] drop-shadow-lg mt-6`}>SOON!</h1>*/}

        {/*}
        <span className={`${audiowide.className} text-4xl md:text-6xl font-bold tracking-tight text-white/80 drop-shadow-lg mt-6`}>
          <span className="dot-1">S</span>
          <span className="dot-2">O</span>
          <span className="dot-3">O</span>
          <span className="dot-4">N</span>
        </span>*/}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-14 justify-items-center">
          {wallets.map(({ name, icon }) => (
            <div key={name} className="w-full max-w-[180px]">
              <button
                onClick={() => {
                  setActiveWallet((prev) => (prev === name ? null : name));
                  const route = `/${name.toLowerCase()}`;
                  router.push(route); // ✅ YÖNLENDİRME
                }}
                className="flex flex-col items-center p-4 bg-white/10 hover:bg-white/20 rounded-xl transition w-full"
              >
                <div className="w-14 h-14 relative mb-2">
                  <Image
                    src={icon}
                    alt={name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-sm text-center">{name}</span>
              </button>

              <div
                className={clsx(
                  "overflow-hidden transition-all duration-500 ease-in-out",
                  activeWallet === name ? "max-h-40 mt-3" : "max-h-0"
                )}
              >
                
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-48 left-1/2 transform -translate-x-1/2 z-30 mt-36 flex justify-center gap-4">
          <Link href="/">
            <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
