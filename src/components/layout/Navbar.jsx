import React, { useState, useEffect } from 'react';
import Icon from '../ui/Icon';
import logo from '../../assets/logo.png';

const Navbar = ({ toggleModal, toggleMenu, isMenuOpen }) => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [active, setActive] = useState("home");

    // ✅ Correct mapping (fixes About & Vision)
    const navItems = [
        { label: "Solutions", id: "solutions" },
        { label: "Services", id: "services" },
        { label: "About Us", id: "about" },
        { label: "Products", id: "products" },
        { label: "Vision", id: "parallax" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">

            <nav
                className={`
                flex items-center justify-between w-full max-w-[90rem] px-6 md:px-10
                rounded-full transition-all duration-500

                ${isScrolled
                    ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(255,16,0,0.1)] py-3'
                    : 'bg-white/5 backdrop-blur-md border border-white/10 py-4'
                }
                `}
            >

                {/* Logo */}
                <div
                    className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <img src={logo} width="100" alt="Zielhoch Logo" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">

                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.id}`}
                            onClick={() => setActive(item.label)}
                            className={`relative text-sm transition-all duration-300 group hover:-translate-y-[1px]
                                ${active === item.label ? "text-white" : "text-white/70 hover:text-white"}
                            `}
                        >
                            {item.label}

                            {/* Underline animation */}
                            <span className={`
                                absolute left-0 -bottom-1 h-[1px] bg-white transition-all duration-300
                                ${active === item.label ? "w-full" : "w-0 group-hover:w-full"}
                            `}></span>
                        </a>
                    ))}

                    {/* CTA */}
                    <button
                        onClick={() => toggleModal(true)}
                        className="ml-4 px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full 
                        hover:scale-105 hover:bg-[#ff1000] hover:text-white active:scale-95 
                        transition-all duration-300 shadow-md"
                    >
                        Get Consultation
                    </button>

                </div>

                {/* Mobile Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white"
                >
                    <Icon name={isMenuOpen ? 'X' : 'Menu'} />
                </button>

            </nav>
        </div>
    );
};

export default Navbar;