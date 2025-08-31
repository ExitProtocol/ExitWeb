import ArrowRight from "@/assets/arrow-right.svg";
import Logo from '@/assets/EX-logo-dark.svg';
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg';
import Link from 'next/link';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'], display: 'swap' });

export const Header = () => {
  return (
    <header className="top-0 bg-black/99 backdrop-blur-sm z-20">
      {/* Coderain bg */}
      <div className="relative h-14 w-full overflow-hidden text-white text-sm">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 bluevid"
        >
          <source src="/code-rain.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Opsiyonel: video üstüne koyu katman */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* İçerik */}
        <div className="relative z-10 flex justify-center items-center h-full">
            <div className={`${audiowide.className} inline-flex gap-1 items-center`}>
                <p>This isn’t just a token. It’s your $EXIT ticket</p>
                {/* <Image src={ArrowRight} alt="Arrow Right" height={20} width={20} className="invert" /> */}
            </div>
        </div>
     </div>


       {/* Blurred part */}
        <div className="py-1">
            <div className="container px-3">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 invert">
                  <Image src={Logo} alt="Exit Logo" height={15} width={30} />
                  <span className={`${audiowide.className} inline-flex gap-1 items-center text-3xl`}>EXIT</span>
                </Link>
                <Image
                src={MenuIcon}
                alt="Menu Icon"
                height={20}
                width={20}
                className="md:hidden"
                />
                <nav className="hidden md:flex gap-6 text-white items-center">
                  <Link href="/about">About</Link>
                  <Link href="/labs">Labs</Link>
                  <Link href="/coresystem">Core Systems</Link>
                  {/*<Link href="/customers">Voices from the Shadows</Link>*/}
                  <Link href="/systemlogs">System Logs</Link>
                  <Link href="/help">Signal Uplink</Link>
                  <Link href="/wallets">
                    <button className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                      Join the Airdrop
                    </button>
                  </Link>
                </nav>
              </div>
            </div>
        </div>
    </header>
  );
};
