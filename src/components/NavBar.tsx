"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when pressing escape key
  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Lock body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-transparent text-bc-2 relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-32 h-auto z-50">
          <Link href="/">
            <Image src={`${basePath}/svgs/wordmark.svg`} alt="Beyond Boundaries Logo" width={100} height={100} className="w-full h-full" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/care-services" className="uppercase hover:underline">
            Care Services
          </Link>
          <Link href="/articles" className="uppercase hover:underline">
            Articles
          </Link>
          <Link href="/videos" className="uppercase hover:underline">
            Videos
          </Link>
          <Link href="/about-us" className="uppercase hover:underline">
            About Us
          </Link>
          <Link
            href="/#get-tested"
            className="uppercase border border-white rounded-full px-6 py-2 hover:bg-white hover:text-[#e22226] transition-colors"
          >
            Get Tested
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden focus:outline-none transition-transform duration-300 ease-in-out"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {!isMenuOpen && (
            <Menu size={24} className="animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu - with animation */}
      <div 
        className={`md:hidden fixed inset-0 bg-black transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? "opacity-90 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* X Button at the top right corner of the menu */}
        <button
          className="absolute top-4 right-4 p-2 text-white focus:outline-none z-30"
          onClick={handleClose}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        
        {/* Large background logo */}
        <div className="absolute bottom-0 w-5xl -right-40 overflow-hidden pointer-events-none opacity-90">
          <img 
            src={`${basePath}/svgs/logo-red.svg`}
            alt="Beyond Boundaries Logo" 
            className="h-[800px] w-auto transform translate-y-9"
          />
        </div>
        
        <div 
          className={`container mx-auto px-4 pt-16 mt-12 flex flex-col space-y-6 transform transition-transform duration-300 ease-in-out relative z-10 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link 
            href="/care-services" 
            className="uppercase text-lg font-medium hover:underline py-2 transform transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Care Services
          </Link>
          <Link 
            href="/articles" 
            className="uppercase text-lg font-medium hover:underline py-2 transform transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Articles
          </Link>
          <Link 
            href="/videos" 
            className="uppercase text-lg font-medium hover:underline py-2 transform transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Videos
          </Link>
          <Link 
            href="/about-us" 
            className="uppercase text-lg font-medium hover:underline py-2 transform transition-all duration-300 hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          {/* "Get Tested" button removed for mobile view as requested */}
        </div>
      </div>
    </div>
  );
}