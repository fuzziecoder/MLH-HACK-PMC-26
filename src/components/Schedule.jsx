import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';
import { EVENT_CONFIG } from '../config/eventConfig';

const timeline = EVENT_CONFIG.schedule.activities;

export default function Schedule() {
    return (
        <section id="schedule" className="section-padding bg-[#060606]">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Schedule</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        <ShinyText text="Event Timeline" color="#888" shineColor="#eee" speed={4} />
                    </h2>

                    {/* Pending schedule notice */}
                    <div className="max-w-xl mx-auto border border-[#222] bg-[#0c0c0c] rounded-xl p-4 mb-4">
                        <p className="text-xs md:text-sm text-[#bbb] font-mono leading-relaxed mb-3">
                            {EVENT_CONFIG.schedule.notice}
                        </p>
                        <a
                            href={EVENT_CONFIG.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-mono text-[#25D366] hover:text-[#45e07f] transition-colors"
                        >
                            <span>💬</span> Join WhatsApp Community →
                        </a>
                    </div>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-[#1a1a1a] md:-translate-x-1/2" />

                    <div className="flex flex-col gap-6">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full border border-[#333] bg-[#0d0d0d] z-10" />

                                {/* Spacer for desktop alternating layout */}
                                <div className="hidden md:flex md:w-1/2" />

                                {/* Content */}
                                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                                    <SpotlightCard spotlightColor="rgba(255,255,255,0.04)" className="!p-4">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs text-[#777] font-mono tracking-wider">{item.time}</span>
                                            <span className="text-[10px] font-mono text-[#555] bg-[#141414] px-2 py-0.5 rounded">Phase {i + 1}</span>
                                        </div>
                                        <p className="text-[#ccc] font-semibold text-sm">{item.event}</p>
                                        <p className="text-[#888] text-xs mt-1">{item.desc}</p>
                                    </SpotlightCard>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
