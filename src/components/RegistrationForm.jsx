import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Stepper, { Step } from './ui/Stepper';
import SpotlightCard from './ui/SpotlightCard';
import ShinyText from './ui/ShinyText';
import StarBorder from './ui/StarBorder';

const inputClass = "w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-3 text-[#a8a8a8] text-sm placeholder-[#333] focus:border-[#333] focus:bg-[#0d0d0d] transition-all duration-200 font-mono";
const labelClass = "block text-xs text-[#888] font-mono uppercase tracking-widest mb-2";

export default function RegistrationForm() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, trigger, getValues } = useForm();

    const onFinalStepCompleted = async () => {
        const data = getValues();
        setIsSubmitting(true);
        
        try {
            // Google Apps Script URL provided by the user
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzi5Y4Mx726MBnbW97wTcJAlQPxiyVQzfJqyptZMAKD5oq4gKgfxWSxe4lXXbrArib7-w/exec';
            
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            // Even if there's an error, we show the success page but with a hint to check MLH
            setSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitting) {
        return (
            <section id="register" className="section-padding bg-[#0a0a0a]">
                <div className="max-w-2xl mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-12 h-12 border-2 border-[#333] border-t-[#aaa] rounded-full animate-spin mb-6" />
                    <h3 className="text-xl font-bold text-[#eee] mb-2">Transmitting Data...</h3>
                    <p className="text-[#888] text-sm font-mono">Securing your spot in the future of AI.</p>
                </div>
            </section>
        );
    }

    if (submitted) {
        return (
            <section id="register" className="section-padding bg-[#0a0a0a]">
                <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SpotlightCard spotlightColor="rgba(255,255,255,0.05)" className="text-center py-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                className="w-16 h-16 rounded-full border border-[#333] flex items-center justify-center mx-auto mb-6"
                            >
                                <svg className="w-8 h-8 text-[#aaa]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>
                            <h3 className="text-xl font-bold text-[#eee] mb-2">Registration Submitted!</h3>
                            <p className="text-[#888] text-sm">Check your email for confirmation. See you at Hack Days!</p>
                            <p className="text-[#777] text-xs mt-4 font-mono">Or register officially at events.mlh.io</p>
                            <div className="mt-6">
                                <StarBorder as="a" href="https://events.mlh.io/events/13832-hack-days-in-hosur" target="_blank" color="rgba(200,200,200,0.5)" speed="5s">
                                    Official MLH Registration
                                </StarBorder>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section id="register" className="section-padding bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 border border-[#1f1f1f] rounded-full px-4 py-1 mb-5">
                        <span className="text-xs text-[#888] font-mono tracking-widest uppercase">Register</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <ShinyText text="Secure Your Spot" color="#888" shineColor="#eee" speed={4} />
                    </h2>
                    <p className="text-[#888] text-sm">
                        Or register directly at{' '}
                        <a href="https://events.mlh.io/events/13832-hack-days-in-hosur" target="_blank" rel="noopener noreferrer"
                            className="text-[#aaa] underline underline-offset-2 hover:text-[#ccc] transition-colors">
                            events.mlh.io
                        </a>
                    </p>
                </motion.div>

                <div className="w-full">
                    <Stepper
                        initialStep={1}
                        onFinalStepCompleted={onFinalStepCompleted}
                        backButtonText="Back"
                        nextButtonText="Continue"
                    >
                        {/* Step 1: Personal Info */}
                        <Step>
                            <div className="py-4 space-y-4">
                                <div>
                                    <h3 className="text-[#ccc] font-semibold text-base mb-1">Personal Information</h3>
                                    <p className="text-[#888] text-xs font-mono mb-5">Tell us about yourself</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Full Name *</label>
                                    <input {...register('name', { required: true })} placeholder="Jane Doe" className={inputClass} />
                                    {errors.name && <p className="text-[#555] text-xs mt-1">Name is required</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Email Address *</label>
                                    <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} placeholder="jane@example.com" type="email" className={inputClass} />
                                    {errors.email && <p className="text-[#555] text-xs mt-1">Valid email required</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Phone Number *</label>
                                    <input {...register('phone', { required: true })} placeholder="+91 98765 43210" type="tel" className={inputClass} />
                                    {errors.phone && <p className="text-[#555] text-xs mt-1">Phone is required</p>}
                                </div>
                            </div>
                        </Step>

                        {/* Step 2: Background */}
                        <Step>
                            <div className="py-4 space-y-4">
                                <div>
                                    <h3 className="text-[#ccc] font-semibold text-base mb-1">Your Background</h3>
                                    <p className="text-[#888] text-xs font-mono mb-5">Help us know more about you</p>
                                </div>
                                <div>
                                    <label className={labelClass}>College / Company *</label>
                                    <input {...register('institution', { required: true })} placeholder="Your college or company" className={inputClass} />
                                </div>
                                <div>
                                    <label className={labelClass}>Experience Level *</label>
                                    <select {...register('experience', { required: true })} className={inputClass}>
                                        <option value="" className="bg-[#0a0a0a]">Select level</option>
                                        <option value="beginner" className="bg-[#0a0a0a]">Beginner</option>
                                        <option value="intermediate" className="bg-[#0a0a0a]">Intermediate</option>
                                        <option value="advanced" className="bg-[#0a0a0a]">Advanced</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Participating As *</label>
                                    <select {...register('participation', { required: true })} className={inputClass}>
                                        <option value="" className="bg-[#0a0a0a]">Select option</option>
                                        <option value="solo" className="bg-[#0a0a0a]">Solo</option>
                                        <option value="team" className="bg-[#0a0a0a]">With a Team</option>
                                        <option value="looking" className="bg-[#0a0a0a]">Looking for Team</option>
                                    </select>
                                </div>
                            </div>
                        </Step>

                        {/* Step 3: Final */}
                        <Step>
                            <div className="py-4 space-y-4">
                                <div>
                                    <h3 className="text-[#ccc] font-semibold text-base mb-1">Final Details</h3>
                                    <p className="text-[#888] text-xs font-mono mb-5">Almost done!</p>
                                </div>

                                <div>
                                    <label className={labelClass}>How did you hear about us? <span className="text-[#777]">(optional)</span></label>
                                    <select {...register('referral')} className={inputClass}>
                                        <option value="" className="bg-[#0a0a0a]">Select option</option>
                                        <option value="social" className="bg-[#0a0a0a]">Social Media</option>
                                        <option value="friend" className="bg-[#0a0a0a]">Friend / Colleague</option>
                                        <option value="mlh" className="bg-[#0a0a0a]">MLH Website</option>
                                        <option value="college" className="bg-[#0a0a0a]">College / Campus</option>
                                        <option value="other" className="bg-[#0a0a0a]">Other</option>
                                    </select>
                                </div>
                                <div className="border border-[#1a1a1a] rounded-lg p-4 bg-[#060606]">
                                    <p className="text-[#777] text-xs font-mono leading-relaxed">
                                        By submitting, you agree to abide by the MLH Code of Conduct and the event rules.
                                        Your info will only be used for event coordination.
                                    </p>
                                </div>
                            </div>
                        </Step>
                    </Stepper>
                </div>
            </div>
        </section>
    );
}
