import CheckIcon from '@/assets/check.svg';
import { twMerge } from "tailwind-merge";
import Image from 'next/image';

const pricingTiers = [
  {
    title: "INITIATION",
    monthlyPrice: "I",
    buttonText: "Track Progress",
    popular: false,
    inverse: false,
    features: [
      "Launch $EXIT token on DEXs",
      "Geo-location airdrop system",
      "Smart contract audits",
      "MetaMask & WalletConnect integration",
      "Telegram & X community push",
    ],
  },
  {
    title: "SHADOW EXPANSION",
    monthlyPrice: "II",
    buttonText: "Join the Movement",
    popular: false,
    inverse: true,
    features: [
      "Stealth transaction protocols",
      "Staking & shadow governance",
      "Mobile wallet launch",
      "CoinGecko & CMC listings",
      "Mass marketing campaign",
    ],
  },
  {
    title: "THE GREAT ESCAPE",
    monthlyPrice: "III",
    buttonText: "Escape the System",
    popular: false,
    inverse: false,
    features: [
      "EXITverse: anonymous Web3 suite",
      "Real-world token hunts",
      "AI-powered masking tech",
      "NFT-based access keys",
      "Strategic privacy partnerships",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id='roadmap' className="py-24 md:px-22 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Roadmap</h2>
          <p className="section-description mt-5">
            {`The path to digital liberation is coded, and we&apos;re writing it in real-time. $EXIT&apos;s roadmap is not just a plan, it&apos;s a declaration of independence.`}
          </p>
        </div>
        <div className="flex flex-col gap-50 items-center mt-10 lg:flex-row lg:items-end lg:justify-center"> {/* normalde gap-6 */}
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <div
              key={title}
              className={twMerge(
                "card",
                inverse && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse && "text-white/60"
                  )}
                >
                  {title}
                </h3>
                {popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span
                  className={twMerge(
                    "text-4xl font-bold tracking-tighter leading-none",
                    inverse ? "text-white" : "text-black"
                  )}
                >
                  {monthlyPrice}
                </span>
                <span
                  className={twMerge(
                    "tracking-tight font-bold",
                    inverse ? "text-white/70" : "text-black/50"
                  )}
                >
                   phase
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full mt-[30px]",
                  inverse && "bg-white text-black"
                )}
              >
                {buttonText}
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center gap-4">
                    <Image
                      src={CheckIcon}
                      alt="Check Icon"
                      width={24}
                      height={24}
                      className={inverse ? "invert" : ""}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
