import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ColorBends from './ui/ColorBends';
import GlitchText from './ui/GlitchText';
import ShinyText from './ui/ShinyText';
import StarBorder from './ui/StarBorder';
import mlhLogo from '../assets/mlh-logo.png';
import geminiLogo from '../assets/gemini-logo.png';

// Countdown timer hook
function useCountdown(targetDate) {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const calc = () => {
            const diff = new Date(targetDate) - new Date();
            if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / 1000 / 60) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            };
        };
        setTimeLeft(calc());
        const timer = setInterval(() => setTimeLeft(calc()), 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
}

const CountdownUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl border border-[#1f1f1f] bg-[#0a0a0a]">
            <span className="font-mono text-2xl md:text-3xl font-bold text-[#c8c8c8]">
                {String(value ?? 0).padStart(2, '0')}
            </span>
        </div>
        <span className="mt-2 text-xs text-[#888] uppercase tracking-widest font-mono">{label}</span>
    </div>
);

const LogoLoop = () => {
    const logos = [
        { src: mlhLogo, alt: 'MLH' },
        { src: geminiLogo, alt: 'Google Gemini' },
        { src: mlhLogo, alt: 'MLH' },
        { src: geminiLogo, alt: 'Google Gemini' },
        { src: mlhLogo, alt: 'MLH' },
        { src: geminiLogo, alt: 'Google Gemini' },
    ];
    return (
        <div className="logo-loop-wrapper relative overflow-hidden w-full mt-8">
            <div className="logo-loop-track flex gap-16 items-center">
                {logos.map((logo, i) => (
                    <div key={i} className="flex-shrink-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className={`h-16 md:h-20 object-contain ${logo.alt === 'MLH' ? 'filter invert' : ''}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Hero({ onRegisterClick }) {
    const countdown = useCountdown('2026-03-11T09:30:00+05:30');

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* ColorBends Background */}
            <div className="absolute inset-0 z-0">
                <ColorBends
                    colors={['#1a1a1a', '#111111', '#222222', '#0d0d0d', '#181818']}
                    speed={0.08}
                    warpStrength={0.8}
                    frequency={0.8}
                    mouseInfluence={0.3}
                    transparent={false}
                    noise={0.03}
                />
            </div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#060606]/60 via-transparent to-[#060606]" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#060606]/40 via-transparent to-[#060606]/40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-5xl mx-auto pt-28 pb-16">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#0d0d0d]/80 px-4 py-1.5 backdrop-blur-sm"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#666] animate-pulse" />
                    <span className="text-xs text-[#666] font-mono tracking-widest uppercase">March 11, 2026 · Hosur</span>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <GlitchText speed={0.8} enableShadows={true} enableOnHover={false} className="text-center">
                        Hack Days in Hosur
                    </GlitchText>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-10"
                >
                    <ShinyText
                        text="March 11, 2026 · 9:30 AM – 4:00 PM · New Hall 3, PMC Tech, Hosur"
                        speed={3}
                        color="#555"
                        shineColor="#aaa"
                        spread={90}
                        className="text-sm md:text-base font-mono"
                    />
                </motion.div>

                {/* Register Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mb-14"
                >
                    <StarBorder
                        as="a"
                        href="https://events.mlh.io/events/13832-hack-days-in-hosur"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="rgba(200,200,200,0.6)"
                        speed="4s"
                    >
                        Register Now — It's Free
                    </StarBorder>
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mb-12"
                >
                    <p className="text-xs text-[#888] font-mono uppercase tracking-widest mb-5">Event Starts In</p>
                    <div className="flex items-center gap-4 md:gap-6">
                        <CountdownUnit value={countdown.days} label="Days" />
                        <span className="text-[#888] text-2xl font-mono pb-5">:</span>
                        <CountdownUnit value={countdown.hours} label="Hrs" />
                        <span className="text-[#888] text-2xl font-mono pb-5">:</span>
                        <CountdownUnit value={countdown.minutes} label="Min" />
                        <span className="text-[#888] text-2xl font-mono pb-5">:</span>
                        <CountdownUnit value={countdown.seconds} label="Sec" />
                    </div>
                </motion.div>

                {/* Logo Loop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="w-full max-w-xl"
                >
                    <p className="text-sm text-[#aaa] font-mono uppercase tracking-widest mb-5 letter-spacing-widest">Powered By</p>
                    <LogoLoop />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="w-px h-10 bg-gradient-to-b from-[#333] to-transparent"
                />
            </motion.div>
        </section>
    );
}
