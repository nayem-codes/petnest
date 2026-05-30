'use client';

import Link from 'next/link';
import { User, Mail, Lock, Image as ImageIcon, ArrowRight } from 'lucide-react';

// import { signUp } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/auth-client';
import toast from 'react-hot-toast';


export default function Register() {
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const registerData = Object.fromEntries(formData.entries());

        const { data, error } = await signUp.email({
            ...registerData
        });

        if (error) {
            toast.error("Registration failed");
            return;
        }
        
        toast.success("Welcome to the nest!");
        router.push("/");
    };

    return (
        <div className="min-h-[80vh] flex flex-col bg-base-200 py-12">
            <div className="grow flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    
                    {/* MAIN CARD CONTAINER */}
                    <div className="bg-base-100 p-8 md:p-10 rounded-[2.5rem] border border-base-300/60 shadow-2xl space-y-8 relative overflow-hidden">
                        
                        {/* Organic decorative backdrop blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        {/* CARD HEADER */}
                        <div className="text-center space-y-2 relative">
                            <h2 className="text-3xl font-black text-neutral tracking-tight">
                                Join <span className="text-primary">PetNest</span>
                            </h2>
                            <p className="text-neutral/60 text-sm font-semibold">
                                Create an account to find your perfect companion
                            </p>
                        </div>

                        {/* INTERACTIVE FORM */}
                        <form className="space-y-5" onSubmit={handleRegister}>
                            
                            {/* Full Name Input Field */}
                            <div className="form-control space-y-1.5">
                                <label htmlFor="name" className="text-xs font-bold text-neutral/70 uppercase tracking-wider ml-1">
                                    Full Name
                                </label>
                                <div className="relative flex items-center">
                                    <User className="w-5 h-5 text-neutral/40 absolute left-4 pointer-events-none" />
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter your full name"
                                        className="input input-bordered w-full h-14 pl-12 rounded-2xl font-medium focus:input-primary bg-base-100 transition-all text-neutral"
                                    />
                                </div>
                            </div>

                            {/* Email Address Input Field */}
                            <div className="form-control space-y-1.5">
                                <label htmlFor="email" className="text-xs font-bold text-neutral/70 uppercase tracking-wider ml-1">
                                    Email Address
                                </label>
                                <div className="relative flex items-center">
                                    <Mail className="w-5 h-5 text-neutral/40 absolute left-4 pointer-events-none" />
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@example.com"
                                        className="input input-bordered w-full h-14 pl-12 rounded-2xl font-medium focus:input-primary bg-base-100 transition-all text-neutral"
                                    />
                                </div>
                            </div>

                            {/* Profile Image URL Input Field */}
                            <div className="form-control space-y-1.5">
                                <label htmlFor="image" className="text-xs font-bold text-neutral/70 uppercase tracking-wider ml-1">
                                    Profile Image URL
                                </label>
                                <div className="relative flex items-center">
                                    <ImageIcon className="w-5 h-5 text-neutral/40 absolute left-4 pointer-events-none" />
                                    <input
                                        id="image"
                                        type="url"
                                        name="image"
                                        placeholder="https://images.unsplash.com/..."
                                        className="input input-bordered w-full h-14 pl-12 rounded-2xl font-medium focus:input-primary bg-base-100 transition-all text-neutral"
                                    />
                                </div>
                            </div>

                            {/* Password Input Field */}
                            <div className="form-control space-y-1.5">
                                <label htmlFor="password" className="text-xs font-bold text-neutral/70 uppercase tracking-wider ml-1">
                                    Password
                                </label>
                                <div className="relative flex items-center">
                                    <Lock className="w-5 h-5 text-neutral/40 absolute left-4 pointer-events-none" />
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        required
                                        placeholder="••••••••"
                                        className="input input-bordered w-full h-14 pl-12 rounded-2xl font-medium focus:input-primary bg-base-100 transition-all text-neutral"
                                    />
                                </div>
                            </div>

                            {/* Submit Action Button using Core Brand Parameters */}
                            <button
                                type="submit"
                                className="btn btn-primary w-full h-14 rounded-2xl text-base font-black shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-base-100 mt-2 group"
                            >
                                Create Account 
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        {/* REDIRECT ANCHOR FOOTER */}
                        <div className="text-center pt-2 border-t border-base-300/40">
                            <p className="text-sm text-neutral/60 font-medium">
                                Already have an account?{' '}
                                <Link
                                    href="/login"
                                    className="text-primary font-black hover:underline underline-offset-4 transition-all"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}