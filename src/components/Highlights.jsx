import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';
import { EVENT_CONFIG } from '../config/eventConfig';

const highlights = EVENT_CONFIG.highlights;

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

export default function Highlights() {
    return (
        <section id="highlights" className="section-padding bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Highlights</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-3">
                        <ShinyText text="Hackathon Highlights" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                    <p className="text-xs md:text-sm text-[#888] font-mono max-w-xl mx-auto">
                        Experience an engaging day of hands-on building, skill showcasing, and community connection.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {highlights.map((item, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <SpotlightCard spotlightColor="rgba(255,255,255,0.04)" className="h-full">
                                <div className="text-2xl mb-3 opacity-80">{item.icon}</div>
                                <h3 className="text-[#ccc] font-semibold text-sm md:text-base mb-1.5">{item.title}</h3>
                                <p className="text-[#888] text-xs md:text-sm leading-relaxed">{item.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
