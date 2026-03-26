import React from 'react';
import Icon from '../ui/Icon';
import heroBg from '../../assets/hero-bg.jpg';
import { useReveal } from '../ui/useReveal';

const Hero = ({ toggleModal }) => {
    const revealRef = useReveal();

    return (
        <section ref={revealRef} className="relative h-screen flex items-center justify-center overflow-hidden text-center" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-black-800/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-10 text-center reveal active">
                <span className="inline-block py-1 px-4 rounded-full border border-[#ff1000] bg-[#ff1000]/10 text-[#ff1000] text-xs font-bold tracking-[0.2em] mb-6 uppercase">
                    Financial Advisory • Business Consulting
                </span>
                <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                    Make Smarter <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6b0000] to-[#ff1000]">
                    Financial Decisions
                </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We help individuals and businesses take control of their finances through clear guidance, structured planning, and practical solutions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={() => toggleModal(true)} className="group flex items-center gap-2 px-4 py-4  bg-[#ff1000]/20 border border-[#ff1000]/30 text-white rounded-full hover:bg-white hover:text-[#ff1000] transition-all duration-300 ">
                        Get Expert Guidance<Icon name="ArrowRight" className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <Icon name="ChevronDown" className="w-5 h-5" />
            </div>
        </section>
    );
};

export default Hero;
