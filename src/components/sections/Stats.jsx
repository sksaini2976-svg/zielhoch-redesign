import React from 'react';
import { useReveal } from '../ui/useReveal';

const Stats = () => {
    const revealRef = useReveal();

    return (
        <section ref={revealRef} className="py-20 bg-white/5 border-y border-white/10 backdrop-blur-sm">
            <div className="max-w-8xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                <div className="reveal">
                    <div className="text-3xl md:text-4xl font-black text-[#ff1000] mb-2">1000</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Happy Client'S</div>
                </div>
                <div className="reveal">
                    <div className="text-3xl md:text-4xl font-black text-[#ff1000] mb-2">99.2%</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Client Retention Rate</div>
                </div>
                <div className="reveal">
                    <div className="text-3xl md:text-4xl font-black text-[#ff1000] mb-2">8+</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Years of Experience</div>
                </div>
                <div className="reveal">
                    <div className="text-3xl md:text-4xl font-black text-[#ff1000] mb-2">1200</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Total Client's</div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
