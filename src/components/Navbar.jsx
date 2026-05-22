"use client";
import { useState } from "react";

export default function Navbar() {
  // Toggle this true/false to see the different logged-in / logged-out UI states
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4 bg-transparent backdrop-blur-md">
      <div className="navbar bg-base-100/90 border border-base-300/60 shadow-sm rounded-full max-w-7xl mx-auto px-6 transition-all duration-300">
        
        {/* LEFT SECTION: Logo & Brand */}
        <div className="navbar-start">
          {/* Mobile Dropdown Menu (Hamburger) */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2 rounded-full hover:bg-secondary/40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-10 mt-3 w-52 p-2 shadow-md border border-base-200 gap-1">
              <li><a className="rounded-xl font-medium text-neutral hover:bg-secondary/40">Home</a></li>
              <li><a className="rounded-xl font-medium text-neutral hover:bg-secondary/40">All Pets</a></li>
              
              {/* Private Mobile Links */}
              {isLoggedIn && (
                <>
                  <div className="divider my-0 opacity-50"></div>
                  <li><a className="rounded-xl font-medium text-neutral hover:bg-secondary/40">My Requests</a></li>
                  <li><a className="rounded-xl font-medium text-neutral hover:bg-secondary/40">Add Pet</a></li>
                </>
              )}
            </ul>
          </div>

          {/* Logo Brand Link */}
          <a className="flex items-center gap-2 cursor-pointer group select-none">
            {/* Playful Paw Icon */}
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-base-100 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              🐾
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral group-hover:text-primary transition-colors">
              Pet<span className="text-primary font-black">Nest</span>
            </span>
          </a>
        </div>

        {/* CENTER SECTION: Desktop Navigation Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <a className="rounded-full font-semibold px-4 py-2 text-neutral hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                Home
              </a>
            </li>
            <li>
              <a className="rounded-full font-semibold px-4 py-2 text-neutral hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                All Pets
              </a>
            </li>

            {/* Private Desktop Links */}
            {isLoggedIn && (
              <>
                <li>
                  <a className="rounded-full font-semibold px-4 py-2 text-neutral hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                    My Requests
                  </a>
                </li>
                <li>
                  <a className="rounded-full font-semibold px-4 py-2 text-neutral hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                    Add Pet
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* RIGHT SECTION: Dynamic Auth State */}
        <div className="navbar-end gap-2">
          {isLoggedIn ? (
            /* User Is Logged In: Profile Avatar Dropdown */
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online placeholder border-2 border-primary/20 hover:border-primary transition-all duration-200">
                <div className="bg-secondary text-neutral-content w-10 rounded-full flex justify-center items-center">
                  <span className="text-neutral font-bold text-sm">ME</span>
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-10 mt-3 w-52 p-2 shadow-md border border-base-200 gap-1">
                <div className="px-4 py-2 text-xs font-bold text-neutral/50 uppercase tracking-wider">
                  My Account
                </div>
                <li>
                  <a className="rounded-xl font-medium text-neutral hover:bg-secondary/40 py-2.5">
                    Dashboard
                  </a>
                </li>
                <div className="divider my-0 opacity-50"></div>
                <li>
                  <button 
                    onClick={() => setIsLoggedIn(false)} 
                    className="rounded-xl font-medium text-error hover:bg-error/10 py-2.5"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            /* User Is NOT Logged In: Playful Action Button */
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="btn btn-primary rounded-full px-6 shadow-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Login
            </button>
          )}
        </div>

      </div>
    </div>
  );
}