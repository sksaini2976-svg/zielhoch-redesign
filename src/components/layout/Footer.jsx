import React from 'react';
import Icon from '../ui/Icon';

const Footer = () => {
    return (
        <footer className="bg-[#030303] pt-32 pb-16 border-t border-white/5 relative overflow-hidden text-left">
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black-800/5 rounded-full blur-[120px]"></div>
            
            <div className="max-w-8xl mx-auto px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    <div className="md:col-span-4 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#ff1000] rounded-xl flex items-center justify-center shadow-lg shadow-[#ff1000]/10">
                                <Icon name="TrendingUp" className="text-black w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter uppercase">ZIELHOCH</span>
                        </div>
                        <p className="text-slate-500 text-base leading-relaxed max-w-sm">
                            Helping individuals and businesses make smarter financial decisions through practical advisory, structured planning, and long-term wealth strategies.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-[#ff1000] transition-all duration-300">
                                <Icon name="Linkedin" className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-[#ff1000] transition-all duration-300">
                                <Icon name="Twitter" className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-slate-400 hover:text-[#ff1000] transition-all duration-300">
                                <Icon name="Instagram" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                     {/* Office */}
                    <div className="md:col-span-3 space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#ff1000]">Offices</h4>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <div className="text-sm font-bold text-white">India (Head Office)</div>
                                <div className="text-xs text-slate-500 leading-relaxed">
                                    Delhi NCR, India
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-sm font-bold text-white">Working Hours</div>
                                <div className="text-xs text-slate-500 leading-relaxed">
                                    Monday – Saturday<br />
                                    10:00 AM – 7:00 PM
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    {/* Navigation */}
                    <div className="md:col-span-2 space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#ff1000]">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-400">
                            <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>


                    
                    {/* Contact */}
                    <div className="md:col-span-3 space-y-8">
                        <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#ff1000]">Get in Touch</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">Have questions or need guidance? Connect with our team for personalized financial advisory.</p>
                         <div className="space-y-3 text-sm text-slate-400">
                            <div>Email: info@zielhoch.com</div>
                            <div>Phone: +91 XXXXX XXXXX</div>
                        </div>
                        <div className="relative group">
                            <input type="email" placeholder="Institutional Email" className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-5 text-sm text-white focus:outline-none focus:border-[#ff1000] transition-all" />
                            <button className="absolute right-2 top-2 p-2 bg-[#ff1000] text-black rounded-lg hover:bg-white transition-all">
                                <Icon name="ArrowRight" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[7.5px] font-bold uppercase tracking-[0.2em] text-slate-600">
                    <div>© Zielhoch. All rights reserved.</div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <a href="#" className="hover:text-[#ff1000] transition-colors">Privacy Architecture</a>
                        <a href="#" className="hover:text-[#ff1000] transition-colors">Regulatory Disclosure</a>
                        <a href="#" className="hover:text-[#ff1000] transition-colors">Risk Governance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
