import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            id="progress-bar" 
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#6b0000] to-[#ff1000] z-[100] transition-all duration-75" 
            style={{ width: `${scrolled}%` }}
        ></div>
    );
};

export default ProgressBar;
