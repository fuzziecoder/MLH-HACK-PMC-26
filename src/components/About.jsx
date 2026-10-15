import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';
import { EVENT_CONFIG } from '../config/eventConfig';

const features = EVENT_CONFIG.aboutFeatures;

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};

export default function About() {
    return (
        <section id="about" className="section-padding bg-[#060606]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">About the Event</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        <ShinyText text="A Student Hackathon for Builders" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                    <p className="text-[#aaa] max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6">
                        Hacktoberfest in PMC brings together students and technology enthusiasts to develop practical solutions, collaborate with fellow builders, explore modern technologies, and showcase their ideas.
                    </p>

                    <div className="max-w-2xl mx-auto border border-[#1f1f1f] rounded-xl p-4 md:p-5 bg-[#0a0a0a] mb-6">
                        <p className="text-xs text-[#777] font-mono uppercase tracking-widest mb-2">💡 Hackathon Theme</p>
                        <p className="text-[#ccc] text-sm md:text-base font-medium leading-relaxed">
                            {EVENT_CONFIG.theme}
                        </p>
                        <p className="text-[#666] text-xs font-mono mt-2 italic">
                            The final problem statement and technical requirements will be announced by the organizers.
                        </p>
                    </div>

                    <a
                        href={EVENT_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#25D366] hover:text-[#45e07f] transition-colors border border-[#25D366]/30 rounded-full px-4 py-1.5 hover:border-[#25D366]/60 bg-[#0d0d0d]"
                    >
                        <span>💬</span> Join our WhatsApp community for all announcements
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((f, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <SpotlightCard spotlightColor="rgba(255,255,255,0.05)" className="h-full">
                                <div className="text-2xl mb-4 opacity-70">{f.icon}</div>
                                <h3 className="text-[#ccc] font-semibold text-base mb-2">{f.title}</h3>
                                <p className="text-[#888] text-sm leading-relaxed">{f.desc}</p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
