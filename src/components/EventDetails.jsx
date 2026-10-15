import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';
import { EVENT_CONFIG } from '../config/eventConfig';

const details = [
    { icon: '⚡', label: 'Event', value: EVENT_CONFIG.name },
    { icon: '📅', label: 'Date', value: 'October 23, 2026' },
    { icon: '📍', label: 'Venue', value: 'PMC Tech, Hosur, Tamil Nadu' },
    { icon: '🏛️', label: 'Hall', value: 'To be announced' },
    { icon: '👥', label: 'Team Size', value: '1–3 members per team' },
    { icon: '💻', label: 'Format', value: 'In-person' },
    { icon: '🎟️', label: 'Registration', value: 'Free' },
    { icon: '🍽️', label: 'Food Contribution', value: 'Amount to be announced' },
    { icon: '⏱️', label: 'Schedule', value: 'To be announced' },
    {
        icon: '🏫',
        label: 'Organizer',
        value: (
            <a
                href={EVENT_CONFIG.organizer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#eee] transition-colors underline underline-offset-4 decoration-[#333]"
            >
                {EVENT_CONFIG.organizer.name}
            </a>
        ),
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function EventDetails() {
    return (
        <section id="details" className="section-padding bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Event Details</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <ShinyText text="Everything You Need to Know" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {details.map((d, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <SpotlightCard spotlightColor="rgba(255,255,255,0.04)" className="flex items-start gap-4 h-full">
                                <span className="text-xl opacity-60 mt-0.5">{d.icon}</span>
                                <div>
                                    <p className="text-xs text-[#777] font-mono uppercase tracking-widest mb-1">{d.label}</p>
                                    <div className="text-[#ccc] font-medium text-sm md:text-base">{d.value}</div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
