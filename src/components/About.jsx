import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';

const features = [
    { icon: '⚡', title: 'Build Real Projects', desc: 'Create working solutions to real-world problems in a single day of intense focus.' },
    { icon: '🤝', title: 'Collaborate', desc: 'Connect with developers, designers and thinkers from across the community.' },
    { icon: '🧠', title: 'AI-Powered', desc: 'Leverage Google Gemini APIs to supercharge your project with cutting-edge intelligence.' },
    { icon: '🏆', title: 'Win Prizes', desc: 'Compete for recognition and prizes. Show the world what you can build.' },
];

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
                        <ShinyText text="A Mini Hackathon for Builders" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                    <p className="text-[#888] max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-4">
                        Hack Days in Hosur is a one-day student hackathon focused on building real products with AI and modern tech.
                        Powered by Google Gemini and brought to life by the local tech community.
                    </p>
                    <div className="max-w-2xl mx-auto border border-[#1f1f1f] rounded-xl p-4 md:p-5 bg-[#0a0a0a] mb-4">
                        <p className="text-xs text-[#777] font-mono uppercase tracking-widest mb-2">🧠 Hackathon Theme</p>
                        <p className="text-[#ccc] text-sm md:text-base font-medium leading-relaxed">
                            Build an innovative solution using <span className="text-[#eee]">Google Gemini AI</span> to solve real-world problems.
                        </p>
                        <p className="text-[#666] text-xs font-mono mt-2 italic">
                            Problem statement will be revealed on hack day 💥
                        </p>
                        <p className="text-[#888] text-xs mt-2">
                            Participants <span className="text-[#aaa] font-medium">must</span> integrate the Gemini API into their projects.
                        </p>
                    </div>
                    <a
                        href="https://discord.gg/y65P74z9M"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-[#7289da] hover:text-[#99aab5] transition-colors border border-[#7289da]/30 rounded-full px-4 py-1.5 hover:border-[#7289da]/60"
                    >
                        <span>🎮</span> Join our Discord for all announcements
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((f, i) => (
                        <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <SpotlightCard spotlightColor="rgba(255,255,255,0.05)" className="h-full">
                                <div className="text-2xl mb-4 opacity-60">{f.icon}</div>
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
