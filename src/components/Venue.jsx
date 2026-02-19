import { motion } from 'framer-motion';
import ShinyText from './ui/ShinyText';
import SpotlightCard from './ui/SpotlightCard';

export default function Venue() {
    return (
        <section id="venue" className="section-padding bg-[#060606]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Venue</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <ShinyText text="Find Us Here" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Address Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SpotlightCard spotlightColor="rgba(255,255,255,0.04)" className="h-full flex flex-col justify-between">
                            <div>
                                <p className="text-xs text-[#777] font-mono uppercase tracking-widest mb-4">Location</p>
                                <h3 className="text-lg font-bold text-[#aaa] mb-2">New Hall [TBD]</h3>
                                <p className="text-[#888] text-sm leading-relaxed mb-6">
                                    PMC Tech<br />
                                    Hosur, Tamil Nadu<br />
                                    India
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#555]">📍</span>
                                    <span className="text-[#888] text-xs font-mono">Hosur, Tamil Nadu</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[#555]">🚗</span>
                                    <span className="text-[#888] text-xs font-mono">Parking available on campus</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[#555]">🏭</span>
                                    <span className="text-[#888] text-xs font-mono">Near Koneripalli</span>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="rounded-xl overflow-hidden border border-[#1a1a1a] min-h-[300px]"
                    >
                        <iframe
                            title="PMC Tech Hosur Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9!2d77.8!3d12.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70a1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sHosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '300px', filter: 'grayscale(100%) contrast(0.8) brightness(0.5)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
