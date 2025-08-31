'use client';

import auroryLogo from '@/assets/AURORY.png';
import grapeLogo from '@/assets/grape.png';
import kaminoLogo from '@/assets/kamino.png';
import jupiterLogo from '@/assets/jupiter.png';
import realmsLogo from '@/assets/realms.png';
import genoLogo from '@/assets/GENO.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
    return (
    <div className='py-8 md:py-12 bg-white'>
        <div className='container'>
            <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                <motion.div className='flex gap-14 flex-none px-14 invert w-[400]' 
                    animate={{
                        x: '-100%',
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop',
                    }}
                >
                    <Image 
                        src={auroryLogo} 
                        alt='Acme Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={grapeLogo} 
                        alt='Quantum Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={kaminoLogo} 
                        alt='Echo Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={jupiterLogo} 
                        alt='Celestial Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={realmsLogo} 
                        alt='Pulse Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={genoLogo} 
                        alt='Apex Logo' 
                        className='logo-ticker-image' 
                    />

                    {/*Second set of the logos */}
                    <Image 
                        src={auroryLogo} 
                        alt='Acme Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={grapeLogo} 
                        alt='Quantum Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={kaminoLogo} 
                        alt='Echo Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={jupiterLogo} 
                        alt='Celestial Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={realmsLogo} 
                        alt='Pulse Logo' 
                        className='logo-ticker-image' 
                    />
                    <Image 
                        src={genoLogo} 
                        alt='Apex Logo' 
                        className='logo-ticker-image' 
                    />
                </motion.div>
            </div>
        </div>
    </div>
)}
