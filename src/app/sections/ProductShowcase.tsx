'use client';

import { useEffect, useState, useRef } from 'react';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const codeLines = [
  'import base64',
  'import logging',
  'import os',
  'from random import SystemRandom',
  '',
  'from cryptography.exceptions import AlreadyFinalized',
  'from cryptography.exceptions import InvalidTag',
  'from cryptography.exceptions import UnsupportedAlgorithm',
  'from cryptography.hazmat.backends import default_backend',
  'from cryptography.hazmat.primitives import hashes',
  'from cryptography.hazmat.primitives.ciphers.aead import AESGCM',
  'from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC',
  '',
  'logging.basicConfig(level=logging.INFO)',
  'logger = logging.getLogger(__name__)',
  '',
  'def demonstrate_string_encryption_password_based(plain_text, password=""):',
  '     """',
  '     Example for encryption and decryption of a string in one method.',
  '     - Random password generation using strong secure random number generator',
  '     - Random salt generation using OS random mode',
  '     - Key derivation using PBKDF2 HMAC SHA-512',
  '     - AES-256 authenticated encryption using GCM',
  '     - BASE64 encoding as representation for the byte-arrays',
  '     - UTF-8 encoding of Strings',
  '     - Exception handling',
  '     """',
  '     try:',
  '         if not password:',
  '             alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"',
  '             password = "".join(SystemRandom().choice(alphabet) for _ in range(40))',
  '         password_bytes = password.encode("utf-8")',
  '',
  '         salt = os.urandom(64)',
  '',
  '         kdf = PBKDF2HMAC(',
  '             algorithm=hashes.SHA512(),',
  '             length=32,',
  '             salt=salt,',
  '             iterations=10000,',
  '             backend=default_backend()',
  '         )',
  '         key = kdf.derive(password_bytes)',
  '',
  '         nonce = os.urandom(12)',
  '',
  '         aesgcm = AESGCM(key)',
  '         cipher_text_bytes = aesgcm.encrypt(',
  '             nonce=nonce,',
  '             data=plain_text.encode("utf-8"),',
  '             associated_data=None',
  '         )',
  '',
  '         cipher_text = base64.urlsafe_b64encode(cipher_text_bytes)',
  '',
  '         decrypted_cipher_text_bytes = aesgcm.decrypt(',
  '             nonce=nonce,',
  '             data=base64.urlsafe_b64decode(cipher_text),',
  '             associated_data=None',
  '         )',
  '         decrypted_cipher_text = decrypted_cipher_text_bytes.decode("utf-8")',
  '',
  '         logger.info("Decrypted and original plain text are the same: %s",',
  '                     decrypted_cipher_text == plain_text)',
  '     except (UnsupportedAlgorithm, AlreadyFinalized, InvalidTag):',
  '         logger.exception("Symmetric encryption failed")',
  '',
  '',
  'if __name__ == "__main__":',
  '     demonstrate_string_encryption_password_based(',
  '         "Text that is going to be sent over an insecure channel and must be "',
  '         "encrypted at all costs!", "")'
];

export const ProductShowcase = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const codeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setLineIndex(0);
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (charIndex < codeLines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + codeLines[lineIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + '\n');
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 250); {/* Timer for new Line */}
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.scrollTop = codeRef.current.scrollHeight;
    }
  }, [displayedText]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 px-20 overflow-x-clip">
      <div className="container text-black">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">$EXIT</div>
          </div>
          <h2 className="section-title mt-5">Welcome to $EXIT, where AI meets anonymity.</h2>
          <p className="section-description mt-5">
            Built by technologists, cryptographers, and rebels.
            $EXIT rewards your freedom of movement.
            No identities. No tracking. No surrender.
          </p>
        </div>

        <div className="relative mt-10">
          <div
            ref={codeRef}
            className="bg-black text-[#6084F1] font-mono p-6 rounded-xl shadow-xl w-full max-w-3xl mx-auto h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayedText}
            <span className="text-white animate-pulse">|</span>
          </div>

          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
