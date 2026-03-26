import React from 'react';
import { aboutFeatures } from '../../data';
import Icon from '../ui/Icon';
import aboutImg from '../../assets/about.jpg';
import { useReveal } from '../ui/useReveal';

const About = () => {
    const revealRef = useReveal();

    return (
        <section id="about" ref={revealRef} className="py-32 relative bg-[#080808]">
            <div className="max-w-8xl mx-auto px-10">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="reveal text-left">
                        <span className="text-[#ff1000] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Why Zielhoch?</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
                            Why Smart Investors <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">Choose Zielhoch</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                            Zielhoch is built on a simple belief — financial clarity creates long-term confidence.<br/>

                            We help individuals and businesses make smarter decisions through structured advisory, practical insights, and disciplined planning.<br/>
                            

                            In an increasingly complex financial world, our role is to simplify choices, reduce uncertainty, and guide our clients toward sustainable growth.
                        </p>
                        <div className="space-y-6">
                            {aboutFeatures.map((feature, index) => (
                                <div key={index} className="flex gap-5 group text-left">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#ff1000]/50 group-hover:bg-[#ff1000]/10 transition-all duration-300">
                                        <Icon name={feature.icon} className="text-[#ff1000] w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                        <p className="text-sm text-slate-500">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[600px] hidden md:block reveal">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff1000]/20 to-transparent rounded-[3rem] overflow-hidden">
                            <div className="absolute inset-0 bg-[url('img/about.jpg')] bg-cover opacity-30 mix-blend-overlay" style={{backgroundImage: `url(${aboutImg})`}}></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                            <div className="relative w-72 h-72">
                                <div className="absolute inset-0 border border-[#ff1000]/20 rounded-full animate-spin-slow"></div>
                                <div className="absolute inset-4 border border-white/10 rounded-full animate-spin-slow-reverse"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(245,158,11,0.3)]">
                                        <Icon name="ShieldCheck" className="text-[#ff1000] w-12 h-12" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
