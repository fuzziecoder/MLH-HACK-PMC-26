import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';

const prizes = [
    { emoji: '🥇', title: 'Best Use of Gemini API', desc: 'MLH Prize — awarded for the most creative & effective integration of Google Gemini.', highlight: true },
    { emoji: '🥈', title: 'Best Overall Project', desc: 'Top project across all categories — polished, functional, and impactful.' },
    { emoji: '🥉', title: 'Most Innovative Solution', desc: 'Thinking outside the box — awarded for creativity and originality.' },
    { emoji: '🎁', title: 'MLH & Google Swag', desc: 'All participants receive exclusive MLH and Google swag packs!' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

export default function Prizes() {
    return (
        <section id="prizes" className="section-padding bg-[#060606]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Prizes</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <ShinyText text="Prizes & Recognition" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {prizes.map((p, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <SpotlightCard
                                spotlightColor={p.highlight ? 'rgba(255,215,0,0.06)' : 'rgba(255,255,255,0.04)'}
                                className={`h-full text-center ${p.highlight ? 'border-[#333]' : ''}`}
                            >
                                <div className="text-4xl mb-4">{p.emoji}</div>
                                <h3 className="text-[#ccc] font-semibold text-base mb-2">{p.title}</h3>
                                <p className="text-[#888] text-sm leading-relaxed">{p.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
