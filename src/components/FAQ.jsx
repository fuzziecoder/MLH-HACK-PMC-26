import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from './ui/ShinyText';

const faqs = [
    {
        q: 'Who can attend?',
        a: 'Students and early professionals with an interest in technology, software, and AI. All skill levels welcome — from beginners to experienced devs.',
    },
    {
        q: 'What should I bring?',
        a: 'Bring your laptop, charger, any accessories you need, a desire to build, and an open mind. We will provide refreshments and workspace.',
    },
    {
        q: 'Is it free?',
        a: 'Yes! Hack Days in Hosur is completely free. Just register and show up ready to build.',
    },
    {
        q: 'Do I need a team?',
        a: 'You can come solo or with a team. We also provide team formation activities — just select "Looking for Team" during registration.',
    },
    {
        q: 'What will I build?',
        a: 'Anything! The theme revolves around AI and innovation based creative solution which make sense by solving real world problems . Projects powered by Google Gemini are encouraged.',
    },
];

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
                            <p className="text-[#888] text-sm leading-relaxed">{answer}</p>
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
