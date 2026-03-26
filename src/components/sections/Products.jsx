import React from 'react';
import { products } from '../../data';
import Icon from '../ui/Icon';
import { useReveal } from '../ui/useReveal';

const Products = ({ toggleModal }) => {
    const revealRef = useReveal();

    return (
        <section id="products" ref={revealRef} className="py-32 bg-[#050505]">
            <div className="max-w-8xl mx-auto px-10">
                <div className="text-center mb-20 reveal">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Our Solutions</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Practical financial solutions designed to help individuals and businesses make better decisions and achieve long-term stability.</p>
                </div>
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10">
                    {products.map((p, index) => (
                        <div key={index} className="reveal relative group bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] overflow-hidden hover:border-[#ff1000]/50 transition-all duration-500 text-left w-[85vw] md:w-full flex-shrink-0 md:flex-shrink snap-center">
                            <div className="absolute top-0 right-0 p-6 text-4xl font-black text-white/5 group-hover:text-[#ff1000]/40 transition-colors">{p.id}</div>
                            <div className="mb-8 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 transition-colors duration-500">
                                <Icon name={p.icon} className="text-white group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-xs font-bold text-[#ff1000] uppercase tracking-widest mb-2">{p.cat}</div>
                            <h3 className="text-xl font-bold mb-4 text-white">{p.title}</h3>
                            <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                                <div className="text-[#ff1000] font-bold text-sm">{p.perf}</div>
                                <Icon name="ArrowRight" className="text-white w-4.5 h-4.5 group-hover:text-[#ff1000] transition-all" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10 p-12 bg-[#ff1000]/[0.03] border border-[#ff1000]/10 rounded-[3rem] reveal text-left">
                    <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full border-2 border-[#ff1000] bg-white flex items-center justify-center"><Icon name="Users" className="w-4 h-4 text-[#ff1000]" /></div>
                        <div className="w-12 h-12 rounded-full border-2 border-[#ff1000] bg-white flex items-center justify-center"><Icon name="Users" className="w-4 h-4 text-[#ff1000]" /></div>
                        <div className="w-12 h-12 rounded-full border-2 border-[#ff1000] bg-white flex items-center justify-center"><Icon name="Users" className="w-4 h-4 text-[#ff1000]" /></div>
                    </div>
                    <div className="text-left">
                        <div className="text-lg font-bold text-white">Start Your Financial Journey with Us</div>
                        <p className="text-slate-400 text-sm">Connect with our team to explore the right financial solutions tailored to your goals.</p>
                    </div>
                    <button onClick={() => toggleModal(true)} className="px-8 py-3 bg-[#ff1000] text-white hover:text-black font-bold rounded-full hover:bg-white transition-all">Request Consultation</button>
                </div>
            </div>
        </section>
    );
};

export default Products;
