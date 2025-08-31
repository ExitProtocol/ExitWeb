'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";
import ArrowIcon from '@/assets/arrow-right.svg';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from "@/assets/noodle.png";
import cogImage from '@/assets/cog.png';

const MotionImage = motion(Image);

export const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start end', 'end start'],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

    // 👇 Footer'a scroll fonksiyonu
    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="md:flex items-center">
                    <div className="md:w-[50%]">
                        <div className="tag">Version 1.0.0</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                            EXIT THE MATRIX
                            <span className="inline-block text-[#001E80] ml-2">
                                <span className="dot-1">.</span>
                                <span className="dot-2">.</span>
                                <span className="dot-3">.</span>
                            </span>
                        </h1>
                        <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                            $EXIT is the untraceable token for those who walk in the shadows. Absolute privacy. No trails. Just freedom.
                        </p>
                        <div className="flex gap-1 items-center mt-[30px]">
                            {/* 🚀 Footer’a git */}
                            <button onClick={scrollToFooter} className="btn btn-primary">
                                Join the Movement
                            </button>
                            {/* 🌐 Sayfa linki */}
                            <a href="/wallets" className="btn btn-text gap-1 flex items-center">
                                <span>Claim $EXIT Now</span>
                                <Image src={ArrowIcon} alt="Arrow Icon" height={20} width={20} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                        <MotionImage
                            src={cogImage}
                            alt="Cog Image"
                            className="md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                            animate={{ y: [-30, 30] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'mirror',
                                duration: 5,
                                ease: 'easeInOut',
                            }}
                        />
                        <MotionImage
                            src={cylinderImage}
                            width={220}
                            height={220}
                            alt="Cylinder Image"
                            className="hidden md:block absolute -top-8 -left-32"
                            style={{
                                translateY: translateY,
                            }}
                        />
                        <MotionImage
                            src={noodleImage}
                            width={220}
                            alt="Noodle Image"
                            className="hidden lg:block absolute top-[524px] left-[448px]"
                            style={{
                                rotate: 30,
                                translateY: translateY,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
