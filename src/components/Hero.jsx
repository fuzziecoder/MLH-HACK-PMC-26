import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ColorBends from './ui/ColorBends';
import GlitchText from './ui/GlitchText';
import ShinyText from './ui/ShinyText';
import StarBorder from './ui/StarBorder';
import { EVENT_CONFIG } from '../config/eventConfig';
import mlhLogo from '../assets/mlh-logo-color.png';
import geminiLogo from '../assets/gemini-logo.png';
import awsLogo from '../assets/aws-logo.png';
import doLogo from '../assets/digitalocean-logo.png';
import devLogo from '../assets/dev-logo.png';
import hacktoberfestLogo from '../assets/hacktoberfest-logo.jpg';

// Countdown timer hook (Asia/Kolkata timezone support)
function useCountdown(targetDate) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isCompleted: false,
    });

    useEffect(() => {
        const calc = () => {
            const diff = new Date(targetDate).getTime() - new Date().getTime();
            if (diff <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
            }
            return {
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
                isCompleted: false,
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
        <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-xl border border-[#1f1f1f] bg-[#0a0a0a]">
            <span className="font-mono text-xl md:text-3xl font-bold text-[#c8c8c8]">
                {String(value ?? 0).padStart(2, '0')}
            </span>
        </div>
        <span className="mt-2 text-[10px] md:text-xs text-[#888] uppercase tracking-widest font-mono">{label}</span>
    </div>
);

const LogoLoop = () => {
    const partnerLogos = [
        { src: hacktoberfestLogo, alt: 'Hacktoberfest', imgClass: 'rounded-md shadow-sm' },
        { src: mlhLogo, alt: 'Major League Hacking (MLH)' },
        { src: awsLogo, alt: 'AWS' },
        { src: geminiLogo, alt: 'Google Gemini' },
        { src: doLogo, alt: 'DigitalOcean' },
        { src: devLogo, alt: 'DEV', imgClass: 'rounded-md' },
    ];
    // Duplicate array to enable seamless marquee scroll
    const logos = [...partnerLogos, ...partnerLogos];

    return (
        <div className="logo-loop-wrapper relative overflow-hidden w-full mt-6">
            <div className="logo-loop-track flex gap-8 md:gap-14 items-center">
                {logos.map((logo, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-300 px-2"
                        title={logo.alt}
                    >
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className={`h-8 md:h-12 w-auto max-w-[130px] object-contain ${logo.imgClass || ''}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Hero({ onRegisterClick }) {
    const countdown = useCountdown(EVENT_CONFIG.targetDateISO);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
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
            <div className="relative z-10 w-full flex flex-col items-center text-center px-4 md:px-8 max-w-5xl mx-auto pt-24 md:pt-28 pb-12 md:pb-16">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#222] bg-[#0d0d0d]/80 px-4 py-1.5 backdrop-blur-sm"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#666] animate-pulse" />
                    <span className="text-xs text-[#888] font-mono tracking-widest uppercase">{EVENT_CONFIG.date} · Hosur</span>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4"
                >
                    <GlitchText speed={0.8} enableShadows={true} enableOnHover={false} className="text-center">
                        {EVENT_CONFIG.name}
                    </GlitchText>
                </motion.div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="mb-5"
                >
                    <p className="text-lg md:text-2xl font-bold tracking-wide text-[#eee]">
                        {EVENT_CONFIG.tagline}
                    </p>
                </motion.div>

                {/* Subtitle / Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-8 max-w-3xl"
                >
                    <p className="text-xs md:text-sm text-[#888] font-mono leading-relaxed mb-4">
                        {EVENT_CONFIG.heroDescription}
                    </p>
                    <ShinyText
                        text={`${EVENT_CONFIG.shortDate} · ${EVENT_CONFIG.venueName}, Hosur · In-person Hackathon`}
                        speed={3}
                        color="#555"
                        shineColor="#aaa"
                        spread={90}
                        className="text-xs md:text-sm font-mono leading-relaxed"
                    />
                </motion.div>

                {/* Display Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 max-w-2xl"
                >
                    <span className="text-xs font-mono text-[#aaa] bg-[#0d0d0d] border border-[#222] px-3.5 py-1.5 rounded-full">
                        📅 October 23, 2026
                    </span>
                    <span className="text-xs font-mono text-[#aaa] bg-[#0d0d0d] border border-[#222] px-3.5 py-1.5 rounded-full">
                        📍 PMC Tech, Hosur
                    </span>
                    <span className="text-xs font-mono text-[#aaa] bg-[#0d0d0d] border border-[#222] px-3.5 py-1.5 rounded-full">
                        💻 In-person hackathon
                    </span>
                    <span className="text-xs font-mono text-[#aaa] bg-[#0d0d0d] border border-[#222] px-3.5 py-1.5 rounded-full">
                        🎟️ Free registration
                    </span>
                </motion.div>

                {/* Hero Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-10 md:mb-14"
                >
                    {EVENT_CONFIG.isRegistrationOpen && EVENT_CONFIG.registrationUrl ? (
                        <StarBorder
                            as="a"
                            href={EVENT_CONFIG.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="rgba(200,200,200,0.6)"
                            speed="4s"
                        >
                            Register Now — It's Free
                        </StarBorder>
                    ) : (
                        <StarBorder
                            as="button"
                            type="button"
                            onClick={onRegisterClick}
                            color="rgba(200,200,200,0.6)"
                            speed="4s"
                        >
                            Registration Opening Soon
                        </StarBorder>
                    )}

                    <a
                        href={EVENT_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] text-[#ccc] hover:text-[#fff] border border-[#2a2a2a] text-xs md:text-sm font-mono px-5 py-3 rounded-xl transition-all duration-200"
                    >
                        <span>💬</span> Join WhatsApp Community
                    </a>
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mb-8 md:mb-12"
                >
                    <p className="text-xs text-[#888] font-mono uppercase tracking-widest mb-5">Event Starts In</p>
                    {countdown.isCompleted ? (
                        <div className="border border-[#1f1f1f] bg-[#0a0a0a] rounded-xl px-6 py-4">
                            <p className="text-sm font-mono text-[#ccc]">Event Concluded · Thank you for participating!</p>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 md:gap-6">
                            <CountdownUnit value={countdown.days} label="Days" />
                            <span className="text-[#888] text-xl md:text-2xl font-mono pb-5">:</span>
                            <CountdownUnit value={countdown.hours} label="Hrs" />
                            <span className="text-[#888] text-xl md:text-2xl font-mono pb-5">:</span>
                            <CountdownUnit value={countdown.minutes} label="Min" />
                            <span className="text-[#888] text-xl md:text-2xl font-mono pb-5">:</span>
                            <CountdownUnit value={countdown.seconds} label="Sec" />
                        </div>
                    )}
                </motion.div>

                {/* Partner and Community Section (Logo Loop) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="w-full max-w-md md:max-w-xl"
                >
                    <p className="text-xs md:text-sm text-[#aaa] font-mono uppercase tracking-widest mb-1">
                        Community & Technology Partners
                    </p>
                    <p className="text-[10px] text-[#666] font-mono mb-3">
                        MLH · AWS · Google Gemini · DigitalOcean · DEV
                    </p>
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
