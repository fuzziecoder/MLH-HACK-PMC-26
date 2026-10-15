import { useState } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';
import StarBorder from './ui/StarBorder';
import { EVENT_CONFIG } from '../config/eventConfig';

export default function RegistrationForm() {
    const isAvailable = EVENT_CONFIG.isRegistrationOpen && Boolean(EVENT_CONFIG.registrationUrl);

    return (
        <section id="register" className="section-padding bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Registration</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        <ShinyText text="Ready to Build Something Amazing?" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                    <p className="text-[#aaa] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Join Hacktoberfest in PMC for a day of building, collaboration, learning, and innovation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <SpotlightCard spotlightColor="rgba(255,255,255,0.05)" className="p-8 md:p-12 text-center">
                        {/* Event Quick Details Banner */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-xl mx-auto">
                            <div className="border border-[#1f1f1f] bg-[#060606] rounded-xl p-4">
                                <span className="text-xs text-[#666] font-mono uppercase tracking-wider block mb-1">📅 Date & Time</span>
                                <span className="text-sm md:text-base text-[#ccc] font-medium">{EVENT_CONFIG.date}</span>
                            </div>
                            <div className="border border-[#1f1f1f] bg-[#060606] rounded-xl p-4">
                                <span className="text-xs text-[#666] font-mono uppercase tracking-wider block mb-1">📍 Venue</span>
                                <span className="text-sm md:text-base text-[#ccc] font-medium">{EVENT_CONFIG.venueCity} (PMC Tech)</span>
                            </div>
                        </div>

                        {/* Free Registration & Food Contribution Notices */}
                        <div className="space-y-3 max-w-xl mx-auto mb-10 text-left">
                            <div className="flex items-start gap-3 border border-[#222] bg-[#080808] p-3.5 rounded-lg">
                                <span className="text-lg leading-none">🎟️</span>
                                <div>
                                    <p className="text-xs font-mono font-bold text-[#eee] uppercase tracking-wide">Free Registration</p>
                                    <p className="text-xs text-[#888] font-mono mt-0.5">Registration for the hackathon is free for all selected participants.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 border border-[#222] bg-[#080808] p-3.5 rounded-lg">
                                <span className="text-lg leading-none">🍽️</span>
                                <div>
                                    <p className="text-xs font-mono font-bold text-[#eee] uppercase tracking-wide">Separate Food Contribution</p>
                                    <p className="text-xs text-[#888] font-mono mt-0.5">
                                        {EVENT_CONFIG.foodNotice} Contribution details and payment instructions will be shared before the event.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Registration Status & Actions */}
                        <div className="flex flex-col items-center justify-center gap-4">
                            {isAvailable ? (
                                <StarBorder
                                    as="a"
                                    href={EVENT_CONFIG.registrationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="rgba(200,200,200,0.6)"
                                    speed="4s"
                                >
                                    Register Now — Free Entry
                                </StarBorder>
                            ) : (
                                <div className="flex flex-col items-center gap-2">
                                    <div className="inline-flex items-center gap-2 border border-[#333] bg-[#111] px-5 py-2.5 rounded-xl">
                                        <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-ping" />
                                        <span className="text-sm font-mono text-[#eee] font-medium">Registration opening soon</span>
                                    </div>
                                    <p className="text-xs text-[#777] font-mono mt-1 max-w-md">
                                        The official registration link will be released shortly. Join the WhatsApp community to be notified first!
                                    </p>
                                </div>
                            )}

                            <div className="mt-2">
                                <a
                                    href={EVENT_CONFIG.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 hover:border-[#25D366]/60 text-sm font-mono px-6 py-3 rounded-xl transition-all duration-200"
                                >
                                    <span>💬</span> Join WhatsApp Community for Instant Updates
                                </a>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>
        </section>
    );
}
