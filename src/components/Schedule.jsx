import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';

const timeline = [
    { time: '9:30 AM', event: 'Opening Ceremony', desc: 'Welcome remarks and event kickoff' },
    { time: '10:00 AM', event: 'Hack Begins', desc: 'Start building your project — time to shine' },
    { time: '12:30 PM', event: 'Lunch Break', desc: 'Fuel up and keep the momentum going' },
    { time: '3:00 PM', event: 'Submission Deadline', desc: 'Freeze your code and prep your demo' },
    { time: '3:15 PM', event: 'Demo & Judging', desc: 'Present your project to the judges' },
    { time: '4:00 PM', event: 'Closing & Awards', desc: 'Winners announced and event wraps up' },
];

export default function Schedule() {
    return (
        <section id="schedule" className="section-padding bg-[#060606]">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Schedule</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <ShinyText text="The Day at a Glance" color="#888" shineColor="#eee" speed={4} />
                    </h2>
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
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 rounded-full border border-[#333] bg-[#0d0d0d] z-10" />

                                {/* Spacer for desktop alternating layout */}
                                <div className="hidden md:flex md:w-1/2" />

                                {/* Content */}
                                <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                                    <SpotlightCard spotlightColor="rgba(255,255,255,0.04)" className="!p-4">
                                        <p className="text-xs text-[#777] font-mono mb-1 tracking-wider">{item.time}</p>
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
