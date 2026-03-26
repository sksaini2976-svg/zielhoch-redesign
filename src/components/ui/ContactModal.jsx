import React from 'react';
import Icon from './Icon';

const ContactModal = ({ isModalOpen, toggleModal }) => {
    if (!isModalOpen) return null;

    return (
        <div id="contact-modal" className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 ${isModalOpen ? 'active' : ''}`}>
            <div className="absolute inset-0 bg-transparent backdrop-blur-sm" onClick={() => toggleModal(false)}></div>
            
            <div className="modal-content relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-5/12 p-8 md:p-12 bg-gray border-r border-white/5">
                    <button onClick={() => toggleModal(false)} className="md:hidden absolute top-6 right-6 text-slate-500 hover:text-white">
                        <Icon name="X" />
                    </button>
                    <span className="text-[#ff1000] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Connect</span>
                    <h2 className="text-3xl font-black text-white mb-6">Excellent <br/>Customer Service</h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-10">
                        To our basic values of providing excellent customer service, operating with honesty and accountability, and promoting staff growth is critical in today's fast-paced and more complicated global world.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <Icon name="Mail" className="text-[#ff1000] w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Inquiries</div>
                                <div className="text-sm font-bold text-white">Info@zielhoch.com</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <Icon name="Phone" className="text-[#ff1000] w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Line</div>
                                <div className="text-sm font-bold text-white">+91-8799753419</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                <Icon name="MapPin" className="text-[#ff1000] w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</div>
                                <div className="text-sm font-bold text-white">1606, RG Trade Tower Netaji Subhash Place, Pitampura Delhi - 110034</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-7/12 p-8 md:p-12 relative">
                    <button onClick={() => toggleModal(false)} className="hidden md:flex absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all">
                        <Icon name="X" className="w-5 h-5" />
                    </button>
                    
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); toggleModal(false); }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                <input type="text" placeholder="" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#ff1000] transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                                <input type="email" placeholder="" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#ff1000] transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Phone No.</label>
                                <input type="number" placeholder="" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#ff1000] transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Location</label>
                                <input type="text" placeholder="" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#ff1000] transition-all" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Inquiry Type</label>
                            <input type="text" placeholder="" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#ff1000] transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Brief Description</label>
                            <textarea rows="4" placeholder="How can our wealth office assist you?" className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#ff1000] transition-all resize-none"></textarea>
                        </div>
                        <button className="w-full py-4 bg-[#ff1000] text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                            Request Advisory Callback
                        </button>
                        <p className="text-[9px] text-slate-600 text-center leading-relaxed">
                            By submitting this form, you acknowledge our privacy policy. All information shared is treated with absolute Swiss discretion.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
