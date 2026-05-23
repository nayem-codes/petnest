import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer

            className="footer footer-center p-10 bg-base-200/90 border border-base-300/60 text-neutral px-6 md:px-16 lg:px-24 flex flex-col space-y-4"
        >
            {/* 1. Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center text-sm font-medium tracking-wide">
                <div className="flex items-center space-x-2">
                    <span className="text-rose-400 text-base">📍</span>
                    <span>123 Vet Center Way, Suite 100, Pet Town, PT 54321</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-rose-400 text-base">📞</span>
                    <a href="" className="link link-hover hover:text-black transition-colors">(800) 555-PETS</a>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-rose-400 text-base">✉️</span>
                    <a href="" className="link link-hover hover:text-black transition-colors">care@petcenter.com</a>
                </div>
            </div>

            {/* 2. Social Links */}
            <div className="flex items-center space-x-4">
                {/* Facebook */}
                <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/80 hover:bg-primary text-neutral hover:text-white transition-all shadow-sm"
                    aria-label="Facebook"
                >
                    <FaFacebookF className="w-4 h-4" />
                </a>


                {/* Instagram */}
                <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/80 hover:bg-primary text-neutral hover:text-white transition-all shadow-sm"
                    aria-label="Facebook"
                >
                    <FaInstagram className="w-4 h-4" />
                </a>
                {/* X / Twitter */}
                <a
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/80 hover:bg-primary text-neutral hover:text-white transition-all shadow-sm"
                    aria-label="Facebook"
                >
                    <FaTwitter className="w-4 h-4" />
                </a>
            </div>

            {/* 3. Copyright Info */}
            <div className="pt-4 border-t border-white/5 w-full text-center">
                <p className="text-xs text-slate-400">
                    © {currentYear} Pet Care Center. All rights reserved. Built with daisyUI & Next.js.
                </p>
            </div>
        </footer >
    );
}