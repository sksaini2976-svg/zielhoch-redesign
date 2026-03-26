import React from 'react';
import { solutions } from '../../data';
import Icon from '../ui/Icon';
import { useReveal } from '../ui/useReveal';

const Solutions = () => {
    const revealRef = useReveal();

    return (
        <section id="solutions" ref={revealRef} className="py-32 relative overflow-hidden">
            <div className="max-w-8xl mx-auto px-10 relative z-10 text-left">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Smart Solutions for Better Financial Decisions</h2>
                        <p className="text-slate-400">We provide practical and structured solutions that help individuals and businesses navigate financial challenges, reduce risk, and build a more secure future.</p>
                    </div>
                    <button className="text-[#ff1000] font-bold flex items-center gap-2 hover:gap-4 transition-all whitespace-nowrap">
                        Explore Our Solutions <Icon name="ArrowRight" />
                    </button>
                </div>
                <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 md:pb-0">
                    {solutions.map((s, index) => (
                        <div key={index} className="reveal p-10 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl group transition-all text-left w-[85vw] md:w-auto flex-shrink-0 md:flex-shrink snap-center">
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300 origin-left text-[#ff1000]">
                                <Icon name={s.icon} className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">{s.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                            <div className="h-1 w-12 bg-[#ff1000] rounded-full group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
