import React from 'react';
import { services } from '../../data';
import Icon from '../ui/Icon';
import { useReveal } from '../ui/useReveal';

const Services = () => {
    const revealRef = useReveal();

    return (
        <section id="services" ref={revealRef} className="py-32 bg-white/5 border-y border-white/10 relative">
            <div className="max-w-8xl mx-auto px-10">
                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-4 reveal text-left">
                        <span className="text-[#ff1000] text-xs font-black tracking-[0.2em] uppercase mb-4 block">What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Our Services</h2>
                        <p className="text-slate-400 mb-10">We provide practical financial and business solutions designed to help you make better decisions, reduce risk, and build long-term stability.</p>
                        
                        <div className="p-8 bg-black/40 border border-white/5 rounded-3xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#ff1000]/10 flex items-center justify-center">
                                    <Icon name="ShieldCheck" className="text-[#ff1000] w-5 h-5" />
                                </div>
                                <div className="font-bold text-white">Trusted Guidance</div>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">We focus on clear, honest, and practical advice to help you navigate financial decisions with confidence.</p>
                        </div>
                    </div>

                    <div className="md:col-span-8 space-y-4">
                        {services.map((s, index) => (
                            <div key={index} className="reveal service-item group p-8 md:p-12 mb-4 bg-black/40 border border-white/5 hover:border-[#ff1000]/30 rounded-[2.5rem] transition-all duration-500 flex flex-col md:flex-row gap-8 items-start md:items-center text-left">
                                <div className="service-icon w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 transition-all duration-500 shrink-0">
                                    <Icon name={s.icon} className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#ff1000] transition-colors">{s.title}</h3>
                                    <div className="flex flex-wrap gap-x-8 gap-y-2">
                                        {s.points.map((p, i) => (
                                            <div key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#ff1000] rounded-full"></div>{p}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
