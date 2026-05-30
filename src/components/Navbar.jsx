"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full px-4 pt-4 bg-transparent backdrop-blur-md">
      <div className="navbar bg-base-100/90 border border-base-300/60 shadow-sm rounded-full max-w-7xl mx-auto px-6 transition-all duration-300">

        {/* LEFT SECTION: Logo & Brand */}
        <div className="navbar-start">
          {/* Mobile Dropdown Menu (Hamburger for public links) */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2 rounded-full hover:bg-secondary/40">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-10 mt-3 w-52 p-2 shadow-md border border-base-200 gap-1">
              <li>
                <Link href={"/"} className="rounded-full font-semibold px-4 py-2 text-neutral hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/pets"} className="rounded-full font-semibold px-4 py-2 text-neutral hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                  All Pets
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo Brand Link */}
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer group select-none">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-base-100 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              🐾
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral group-hover:text-primary transition-colors">
              Pet<span className="text-primary font-black">Nest</span>
            </span>
          </Link>
        </div>

        {/* CENTER SECTION: Public Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link href={"/"} className="rounded-full font-semibold px-4 py-2 text-neutral hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/pets"} className="rounded-full font-semibold px-4 py-2 text-neutral hover:bg-secondary/50 hover:text-primary transition-all duration-200">
                All Pets
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION: Dynamic Profile Dropdown */}
        <div className="navbar-end gap-2">
          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <button className="flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border">
                <Image
                  width={40}
                  height={40}
                  src="https://i.pinimg.com/1200x/2c/78/b5/2c78b584340e6d3db4de341708914ab1.jpg"
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                />
                <div className="text-left hidden lg:block">
                  <p className="text-sm font-bold truncate max-w-25">Nayem Uddin</p>
                  <p className="text-[10px] text-slate-500">Student</p>
                </div>
              </button>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-10 mt-3 w-52 p-2 shadow-md border border-base-200 gap-1">
                <div className="px-4 py-2 text-xs font-bold text-neutral/50 uppercase">
                  My Account
                </div>
                <li>
                  {/* Clicking this points users directly to the Dashboard sub-view */}
                  <a onClick={() => setIsDashboardOpen(true)} className="rounded-xl font-medium text-neutral hover:bg-secondary/40 py-2.5">
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
            <div className="flex gap-2">
              <Link
                href="/login"
                className="btn btn-transparent rounded-full px-6 shadow-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="btn btn-primary rounded-full px-6 shadow-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Register
              </Link>

            </div>
          )}
        </div>
        <div
          className={`
      fixed top-0 right-0 h-screen
      w-72 bg-base-100
      shadow-xl
      border-l border-base-200
      z-50
      transition-transform duration-300
      ${isDashboardOpen ? "translate-x-0" : "hidden"}
    `}
        >
          <div className="p-6">

            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-xl text-primary">
                Dashboard
              </h2>

              <button
                onClick={() => setIsDashboardOpen(false)}
                className="btn btn-circle btn-sm btn-ghost"
              >
                ✕
              </button>
            </div>

            <ul className="menu gap-2">

              <li>
                <a className="rounded-xl hover:bg-secondary/40">
                  My Requests
                </a>
              </li>

              <li>
                <a className="rounded-xl hover:bg-secondary/40">
                  Add Pet
                </a>
              </li>

              <li>
                <a className="rounded-xl hover:bg-secondary/40">
                  My Listings
                </a>
              </li>

            </ul>

          </div>
        </div>

      </div>
    </div>
  );
} ``