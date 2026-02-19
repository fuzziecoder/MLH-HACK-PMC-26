import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';

const details = [
    { icon: '📅', label: 'Date', value: 'March 11, 2026' },
    { icon: '⏰', label: 'Time', value: '9:30 AM – 4:00 PM' },
    { icon: '📍', label: 'Venue', value: 'New Hall 3, Hosur' },
    { icon: '👥', label: 'Who Can Attend', value: 'Students & Early Professionals' },
    { icon: '🏫', label: 'Organizer', value: 'Flexiroasters' },
    { icon: '🧠', label: 'Theme', value: 'AI + Full Stack Innovation' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function EventDetails() {
    return (
        <section id="details" className="section-padding bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Event Details</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <ShinyText text="Everything You Need to Know" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {details.map((d, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <SpotlightCard spotlightColor="rgba(255,255,255,0.04)" className="flex items-start gap-4 h-full">
                                <span className="text-xl opacity-50 mt-0.5">{d.icon}</span>
                                <div>
                                    <p className="text-xs text-[#777] font-mono uppercase tracking-widest mb-1">{d.label}</p>
                                    <p className="text-[#ccc] font-medium text-sm md:text-base">{d.value}</p>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
