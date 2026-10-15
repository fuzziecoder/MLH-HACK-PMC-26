import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';
import { EVENT_CONFIG } from '../config/eventConfig';

const foodCards = [
    {
        icon: '🎟️',
        title: 'Free Registration',
        desc: 'Registration for Hacktoberfest in PMC is completely free for all eligible participants.',
    },
    {
        icon: '🍱',
        title: 'Separate Food Contribution',
        desc: 'A separate contribution will be collected from participants to cover organized meals and expenses.',
    },
    {
        icon: '📢',
        title: 'Details Announced Soon',
        desc: 'The exact contribution amount and official payment instructions will be shared by the organizing team before the event.',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Food() {
    return (
        <section id="food" className="section-padding bg-[#060606]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Food & Refreshments</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        <ShinyText text="Food and Refreshments" color="#888" shineColor="#eee" speed={4} />
                    </h2>

                    <p className="text-[#888] max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6">
                        {EVENT_CONFIG.foodDescription}
                    </p>

                    {/* Notice Badge */}
                    <div className="inline-flex items-center gap-2 border border-[#333] bg-[#0c0c0c] rounded-full px-5 py-2">
                        <span className="h-2 w-2 rounded-full bg-[#aaa] animate-pulse" />
                        <span className="text-xs md:text-sm font-mono text-[#ccc] font-medium">
                            {EVENT_CONFIG.foodNotice}
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {foodCards.map((card, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <SpotlightCard spotlightColor="rgba(255,255,255,0.04)" className="h-full text-center">
                                <div className="text-3xl mb-3 opacity-80">{card.icon}</div>
                                <h3 className="text-[#ccc] font-semibold text-base mb-2">{card.title}</h3>
                                <p className="text-[#888] text-xs md:text-sm leading-relaxed">{card.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
