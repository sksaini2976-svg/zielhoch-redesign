import React from 'react';
import Icon from '../ui/Icon';
import { useReveal } from '../ui/useReveal';

const Parallax = () => {
    const revealRef = useReveal();

    return (
        <section id="parallax" ref={revealRef} className="py-32 bg-black overflow-hidden relative">
            <div className="max-w-8xl mx-auto px-10">
                <div className="reveal relative rounded-[4rem] bg-gradient-to-br from-[#ff1000]/20 via-black to-black border border-[#ff1000]/10 overflow-hidden min-h-[600px] flex items-center">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        </svg>
                    </div>
                    <div className="relative z-10 p-10 md:p-24 grid md:grid-cols-2 gap-16 items-center">
                        <div className="text-left">
                            <span className="text-[#ff1000] text-xs font-black tracking-[0.4em] uppercase mb-8 block">Executive Perspective</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-white">Beyond Traditional <br /><span className="text-[#ff1000]">Wealth Logic</span></h2>
                            <p className="text-slate-300 text-xl mb-12 leading-relaxed italic font-light border-l-2 border-[#ff1000]/30 pl-8">
                                "In a world of noise, we prioritize clarity. Our strategy isn't just about growth—it's about building an architecture for generations."
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff1000]/20 to-black border border-[#ff1000]/20 flex items-center justify-center">
                                <span className="text-white font-bold text-sm tracking-widest">ZH</span>
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg uppercase tracking-tight">Executive Perspective</div>
                                    <div className="text-[10px] text-[#ff1000] uppercase tracking-[0.3em] font-black">Zielhoch Strategy Desk</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full flex items-center justify-center">
                            <div className="absolute w-[400px] h-[400px] border border-[#ff1000]/5 rounded-full animate-spin-slow"></div>
                            <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-spin-slow-reverse"></div>
                            <div className="chart-card bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl w-full max-w-sm relative z-20">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Client Portfolio Growth</span>
                                        <div className="text-2xl font-black text-white">Long-Term Performance</div>
                                    </div>
                                    <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                                        +12.4%
                                    </div>
                                </div>
                                <div className="flex gap-3 items-end h-32 mb-6">
                                    <div className="flex-1 bg-[#ff1000]/20 rounded-t-lg h-[40%] bar-grow"></div>
                                    <div className="flex-1 bg-[#ff1000]/30 rounded-t-lg h-[65%] bar-grow" style={{transitionDelay: '0.1s'}}></div>
                                    <div className="flex-1 bg-[#ff1000]/40 rounded-t-lg h-[55%] bar-grow" style={{transitionDelay: '0.2s'}}></div>
                                    <div className="flex-1 bg-[#ff1000]/60 rounded-t-lg h-[80%] bar-grow" style={{transitionDelay: '0.3s'}}></div>
                                    <div className="flex-1 bg-[#ff1000]/80 rounded-t-lg h-[70%] bar-grow" style={{transitionDelay: '0.4s'}}></div>
                                    <div className="flex-1 bg-[#ff1000] rounded-t-lg h-[100%] bar-grow" style={{transitionDelay: '0.5s'}}></div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                                    <span>Q1 2023</span>
                                    <span>Current</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parallax;
