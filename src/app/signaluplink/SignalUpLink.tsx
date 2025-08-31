'use client';

import Image from 'next/image';
import Link from 'next/link';

export const SecuritySection = () => {
  return (
    <section className="py-20 px-4 bg-white text-black" id="security">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Audits & Security</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ✅ Smart Contract Audit */}
          <div className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/certik.svg" alt="CertiK" width={40} height={40} />
              <h3 className="text-xl font-semibold">Smart Contract Audit</h3>
            </div>
            <p className="text-gray-600">Audited by CertiK — verified no critical exploits found.</p>
            <Link href="/audit/certik-report.pdf" target="_blank" className="text-blue-600 underline mt-2 inline-block">
              View Report (PDF)
            </Link>
          </div>

          {/* ✅ KYC/AML Badge */}
          <div className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/assuredefi.svg" alt="AssureDefi" width={40} height={40} />
              <h3 className="text-xl font-semibold">Verified KYC</h3>
            </div>
            <p className="text-gray-600">Team identity verified by Assure DeFi.</p>
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">KYC Verified</span>
          </div>

          {/* ✅ HTTPS / SSL */}
          <div className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/cloudflare.svg" alt="Cloudflare" width={40} height={40} />
              <h3 className="text-xl font-semibold">SSL Certificate</h3>
            </div>
            <p className="text-gray-600">Secured by HTTPS and SSL encryption.</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Secure Connection</span>
          </div>

          {/* ✅ Coin Listings */}
          <div className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/coingecko.svg" alt="CoinGecko" width={30} height={30} />
              <Image src="/logos/cmc.svg" alt="CMC" width={30} height={30} />
              <h3 className="text-xl font-semibold">Listed on Trackers</h3>
            </div>
            <p className="text-gray-600">Token listed on CoinGecko and CoinMarketCap.</p>
          </div>

          {/* ✅ Wallet Compatibility */}
          <div className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/metamask.svg" alt="MetaMask" width={30} height={30} />
              <Image src="/logos/walletconnect.svg" alt="WalletConnect" width={30} height={30} />
              <Image src="/logos/trustwallet.svg" alt="Trust Wallet" width={30} height={30} />
              <h3 className="text-xl font-semibold">Wallet Support</h3>
            </div>
            <p className="text-gray-600">Compatible with MetaMask, Trust Wallet, WalletConnect.</p>
          </div>

          {/* ✅ GitHub Open Source */}
          <div className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/github.svg" alt="GitHub" width={30} height={30} />
              <h3 className="text-xl font-semibold">Open Source Code</h3>
            </div>
            <p className="text-gray-600">Smart contracts are open-source and hosted on GitHub.</p>
            <Link href="https://github.com/your-repo" target="_blank" className="text-blue-600 underline mt-2 inline-block">
              View on GitHub
            </Link>
          </div>

          {/* ✅ Bug Bounty */}
          <div className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/immunefi.svg" alt="Immunefi" width={30} height={30} />
              <h3 className="text-xl font-semibold">Bug Bounty Program</h3>
            </div>
            <p className="text-gray-600">Active security bounty via Immunefi platform.</p>
            <Link href="https://immunefi.com/bounty/yourproject" target="_blank" className="text-blue-600 underline mt-2 inline-block">
              View Program
            </Link>
          </div>

          {/* ✅ Chain Verified */}
          <div className="p-6 border rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logos/etherscan.svg" alt="Etherscan" width={30} height={30} />
              <h3 className="text-xl font-semibold">Verified on Etherscan</h3>
            </div>
            <p className="text-gray-600">Smart contract is verified on-chain.</p>
            <Link href="https://etherscan.io/address/yourcontract" target="_blank" className="text-blue-600 underline mt-2 inline-block">
              View on Etherscan
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
