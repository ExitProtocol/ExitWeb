import SocialX from '@/assets/social-x.svg';
import SocialTele from '@/assets/telegram.png';
import SocialDc from '@/assets/discord.png';
import SocialGit from '@/assets/github.svg';
import Logo from '@/assets/EX-logo-dark.svg';
import Image from 'next/image';
import { Audiowide } from 'next/font/google';
import Link from 'next/link';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'], display: 'swap' });

export const Footer = () => {
  return (
    <footer id="footer" className="py-24 md:px-22 bg-black/99 text-[#BCBCBC] text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:absolute flex items-center space-x-2">
          <Image src={Logo} alt="Exit Logo" height={15} width={30} className="invert" />
          <span className={`${audiowide.className} inline-flex gap-1 items-center text-3xl`}>EXIT</span>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="/about">About</Link>
          <Link href="/coresystem">Core System</Link>
          <Link href="/comments">Voices from the Shadows</Link>
          <Link href="/help">Signal Uplink</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Link href="https://twitter.com/exitproto" target="_blank" rel="noopener noreferrer">
            <Image src={SocialX} alt="X" className="brightness-0 invert" height={25} width={25} />
          </Link>
          <Link href="https://t.me/" target="_blank" rel="noopener noreferrer">
            <Image src={SocialTele} alt="Telegram" className="brightness-0 invert" height={25} width={25} />
          </Link>
          <Link href="https://discord.com/" target="_blank" rel="noopener noreferrer">
            <Image src={SocialDc} alt="Discord" className="brightness-0 invert" height={25} width={25} />
          </Link>
          <Link href="https://github.com/ExitProtocol/Token" target="_blank" rel="noopener noreferrer">
            <Image src={SocialGit} alt="GitHub" className="brightness-0 invert" height={25} width={25} />
          </Link>
        </div>
        <p className="mt-6">&copy; 2025 InExitWeTrust Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
