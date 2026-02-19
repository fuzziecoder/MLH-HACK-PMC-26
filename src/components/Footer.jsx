import { motion } from 'framer-motion';
import StarBorder from './ui/StarBorder';
import ShinyText from './ui/ShinyText';

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/fuzziecoder', icon: '⌬' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/fuzziecoder', icon: '⌁' },
    { label: 'X / Twitter', href: 'https://x.com/fuzziecoder', icon: '✕' },
    { label: 'Instagram', href: 'https://instagram.com/fuzziecoder', icon: '◎' },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#060606] border-t border-[#111]">
            {/* Contact section */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Contact</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        <ShinyText text="Reach Out for Any Queries" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                    <p className="text-[#888] text-xs font-mono mb-6">For questions regarding this hackathon</p>
                    <a
                        href="mailto:ramvj2005@gmail.com"
                        className="text-[#999] text-sm font-mono hover:text-[#ccc] transition-colors duration-200 border-b border-[#222] pb-0.5"
                    >
                        ramvj2005@gmail.com
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-mono text-xs tracking-widest text-[#888] uppercase mb-4">Hack Days in Hosur</h3>
                        <p className="text-[#888] text-xs leading-relaxed">
                            A one-day hackathon for builders, dreamers, and makers. Powered by Google Gemini.
                            March 11, 2026 · Hosur, Tamil Nadu.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-mono text-xs tracking-widest text-[#888] uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['#about', '#details', '#schedule', '#register', '#venue', '#faq'].map(href => (
                                <li key={href}>
                                    <a href={href} className="text-[#888] text-xs font-mono hover:text-[#ccc] transition-colors duration-200 capitalize">
                                        {href.replace('#', '')}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-mono text-xs tracking-widest text-[#888] uppercase mb-4">Connect</h3>
                        <ul className="space-y-2">
                            {socialLinks.map(s => (
                                <li key={s.label}>
                                    <a href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[#888] text-xs font-mono hover:text-[#ccc] transition-colors duration-200">
                                        <span className="text-[#666]">{s.icon}</span>
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Register CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 py-8 border-t border-[#111]"
                >
                    <p className="text-[#555] text-xs font-mono">Ready to build something amazing?</p>
                    <StarBorder
                        as="a"
                        href="https://events.mlh.io/events/13832-hack-days-in-hosur"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="rgba(180,180,180,0.5)"
                        speed="5s"
                    >
                        Register on MLH
                    </StarBorder>
                </motion.div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-[#0f0f0f] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#888] text-xs font-mono">
                        Built with ❤️ by{' '}
                        <a href="https://github.com/fuzziecoder" target="_blank" rel="noopener noreferrer" className="hover:text-[#ccc] transition-colors">
                            team Flexiroasters
                        </a>
                    </p>
                    <p className="text-[#777] text-xs font-mono">© 2026 Hack Days in Hosur. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
