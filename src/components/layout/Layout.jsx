import React, { useState } from 'react';

import ProgressBar from './ProgressBar';
import Navbar from './Navbar';
import Footer from './Footer';

import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import About from '../sections/About';
import Solutions from '../sections/Solutions';
import Services from '../sections/Services';
import Parallax from '../sections/Parallax';
import Products from '../sections/Products';

import ContactModal from '../ui/ContactModal';
import MobileMenu from '../ui/MobileMenu';

const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // ✅ Modal control
    const toggleModal = (show) => {
        setIsModalOpen(show);
        document.body.style.overflow = show ? 'hidden' : 'auto';
    };

    // ✅ Menu toggle
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className="bg-[#050505] text-slate-100 selection:bg-[#ff1000]/30 overflow-x-hidden text-left">

            <ProgressBar />

            {/* Navbar */}
            <Navbar
                toggleModal={toggleModal}
                toggleMenu={toggleMenu}
                isMenuOpen={isMenuOpen}
            />

            {/* ✅ FIXED Mobile Menu */}
            <MobileMenu
                isOpen={isMenuOpen}          // ✅ correct prop
                toggleMenu={toggleMenu}     // ✅ required
                toggleModal={toggleModal}
            />

            {/* Modal */}
            <ContactModal
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
            />

            {/* Main Content */}
            <main>
                <Hero toggleModal={toggleModal} />
                <Stats />
                <About />
                <Solutions />
                <Services />
                <Parallax />
                <Products toggleModal={toggleModal} />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;