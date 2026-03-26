import React, { useEffect } from "react";

const MobileMenu = ({ isOpen, toggleMenu, toggleModal }) => {

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={toggleMenu}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
      />

      {/* Floating Glass Menu */}
      <div className="fixed top-28 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50
        rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 
        shadow-2xl p-6 animate-menuOpen">

        {/* Menu Items */}
        <nav className="flex flex-col gap-5 text-center">

          {[
            "Solutions",
            "Services",
            "About Us",
            "Products",
            "Vision"
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              onClick={toggleMenu}
              className="text-white/80 text-lg font-medium 
              hover:text-white transition-all duration-300"
            >
              {item}
            </a>
          ))}

        </nav>

        {/* CTA */}
        <button
          onClick={() => {
            toggleMenu();
            toggleModal(true);
          }}
          className="mt-6 w-full py-3 bg-white text-black font-semibold rounded-full 
          hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Contact Wealth Office
        </button>

      </div>
    </>
  );
};

export default MobileMenu;