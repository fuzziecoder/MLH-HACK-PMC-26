import { motion } from 'framer-motion';
import StarBorder from './ui/StarBorder';
import ShinyText from './ui/ShinyText';
import { EVENT_CONFIG } from '../config/eventConfig';

const socialLinks = [
    { label: 'WhatsApp', href: EVENT_CONFIG.whatsappUrl, icon: '💬' },
    { label: 'Official Website', href: EVENT_CONFIG.organizer.website, icon: '🌐' },
    { label: 'GitHub', href: EVENT_CONFIG.organizer.github, icon: '⌬' },
    { label: 'LinkedIn', href: EVENT_CONFIG.organizer.linkedin, icon: '⌁' },
    { label: 'X / Twitter', href: EVENT_CONFIG.organizer.twitter, icon: '✕' },
    { label: 'Instagram', href: EVENT_CONFIG.organizer.instagram, icon: '◎' },
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
                    <p className="text-[#888] text-xs font-mono mb-6">For questions regarding Hacktoberfest in PMC</p>
                    <a
                        href={`mailto:${EVENT_CONFIG.organizer.email}`}
                        className="text-[#999] text-sm font-mono hover:text-[#ccc] transition-colors duration-200 border-b border-[#222] pb-0.5"
                    >
                        {EVENT_CONFIG.organizer.email}
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-mono text-xs tracking-widest text-[#888] uppercase mb-4">{EVENT_CONFIG.name}</h3>
                        <p className="text-[#888] text-xs leading-relaxed mb-3">
                            An in-person student hackathon for builders, designers, and innovators.
                            Friday, October 23, 2026 · PMC Tech, Hosur, Tamil Nadu.
                        </p>
                        <p className="text-[#666] text-xs font-mono">
                            Organized by {EVENT_CONFIG.organizer.name}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-mono text-xs tracking-widest text-[#888] uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { href: '#about', label: 'About' },
                                { href: '#highlights', label: 'Highlights' },
                                { href: '#details', label: 'Details' },
                                { href: '#schedule', label: 'Schedule' },
                                { href: '#food', label: 'Food & Meals' },
                                { href: '#prizes', label: 'Prizes & Goodies' },
                                { href: '#register', label: 'Register' },
                                { href: '#venue', label: 'Venue' },
                                { href: '#faq', label: 'FAQ' },
                            ].map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-[#888] text-xs font-mono hover:text-[#ccc] transition-colors duration-200">
                                        {link.label}
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
                                    <a
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-[#888] text-xs font-mono hover:text-[#ccc] transition-colors duration-200"
                                    >
                                        <span className="text-[#666]">{s.icon}</span>
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* WhatsApp Community CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3 py-8 border-t border-[#111]"
                >
                    <p className="text-[#25D366] text-xs font-mono uppercase tracking-widest">📢 Stay Updated</p>
                    <p className="text-[#888] text-xs text-center max-w-md">
                        All official announcements, schedule releases, problem statements, and event guidelines will be shared on our WhatsApp community.
                    </p>
                    <a
                        href={EVENT_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-black text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors font-mono"
                    >
                        <span>💬</span> Join WhatsApp Community
                    </a>
                </motion.div>

                {/* Register CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 py-8 border-t border-[#111]"
                >
                    <p className="text-[#555] text-xs font-mono">Ready to build something amazing?</p>
                    {EVENT_CONFIG.isRegistrationOpen && EVENT_CONFIG.registrationUrl ? (
                        <StarBorder
                            as="a"
                            href={EVENT_CONFIG.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="rgba(180,180,180,0.5)"
                            speed="5s"
                        >
                            Register Now
                        </StarBorder>
                    ) : (
                        <StarBorder
                            as="a"
                            href="#register"
                            color="rgba(180,180,180,0.5)"
                            speed="5s"
                        >
                            Registration Opening Soon
                        </StarBorder>
                    )}
                </motion.div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-[#0f0f0f] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#888] text-xs font-mono">
                        Built with care by{' '}
                        <a href={EVENT_CONFIG.organizer.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#ccc] underline underline-offset-2 transition-colors">
                            fuzziecoder
                        </a>
                    </p>
                    <p className="text-[#777] text-xs font-mono">{EVENT_CONFIG.footerCopyright}</p>
                </div>
            </div>
        </footer>
    );
}
