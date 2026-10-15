import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from './ui/ShinyText';
import { EVENT_CONFIG } from '../config/eventConfig';

const faqs = EVENT_CONFIG.faqs;

function formatAnswer(text) {
    if (text.includes('https://chat.whatsapp.com')) {
        const parts = text.split('https://chat.whatsapp.com/BXyaYKATJvM1614nMeNYc5?s=cl&p=a&mlu=4&ilr=4');
        return (
            <span>
                {parts[0]}
                <a
                    href={EVENT_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] underline underline-offset-2 hover:text-[#45e07f] transition-colors break-all"
                >
                    Official WhatsApp Group
                </a>
                {parts[1]}
            </span>
        );
    }
    if (text.includes('ramvj2005@gmail.com')) {
        const parts = text.split('ramvj2005@gmail.com');
        return (
            <span>
                {parts[0]}
                <a
                    href="mailto:ramvj2005@gmail.com"
                    className="text-[#eee] underline underline-offset-2 hover:text-[#fff] transition-colors"
                >
                    ramvj2005@gmail.com
                </a>
                {parts[1]}
            </span>
        );
    }
    return text;
}

function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div className="border border-[#1a1a1a] rounded-xl overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-5 py-4 text-left bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-colors duration-200"
            >
                <span className="text-[#ccc] text-sm font-medium">{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[#888] ml-4 flex-shrink-0 text-lg leading-none"
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-5 py-4 bg-[#060606] border-t border-[#111]">
                            <p className="text-[#888] text-sm leading-relaxed">{formatAnswer(answer)}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="section-padding bg-[#0a0a0a]">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">FAQ</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <ShinyText text="Got Questions?" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                        >
                            <FAQItem
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
