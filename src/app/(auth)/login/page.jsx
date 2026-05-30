'use client';

import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());

        const { data, error } = await signIn.email({
            ...loginData,
        });



        if (error) {
            toast.error("Authentication failed. Please check your credentials.");
            return;
        }

        toast.success("Welcome back to the nest!");
        router.push("/");
    };

    const handleGoogleLogin = async () => {
        const { data, error } = await signIn.social({
            provider: "google",
            callbackURL: "/"
        });

        if (error) {
            toast.error("Google authentication failed");
        }
    };

    return (
        <div className="min-h-[80vh] flex flex-col bg-base-200 py-12">
            <div className="grow flex items-center justify-center p-4">
                <div className="w-full max-w-md">

                    {/* CARD CONTAINER */}
                    <div className="bg-base-100 p-8 md:p-10 rounded-[2.5rem] border border-base-300/60 shadow-2xl space-y-6 relative overflow-hidden">

                        {/* Decorative radial background accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

                        {/* HEADER BLOCK */}
                        <div className="text-center space-y-2 relative">
                            <h2 className="text-3xl font-black text-neutral tracking-tight">
                                Welcome <span className="text-primary">Back</span>
                            </h2>
                            <p className="text-neutral/60 text-sm font-semibold">
                                Continue your adoption journey today
                            </p>
                        </div>

                        {/* SOCIAL PROVIDER BUTTON */}
                        <div className="space-y-3">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="btn btn-outline border-base-300 hover:bg-base-200/50 w-full h-12 font-bold rounded-2xl gap-3 text-neutral normal-case"
                            >
                                <Image
                                    width={20}
                                    height={20}
                                    src="https://www.google.com/favicon.ico"
                                    className="w-5 h-5"
                                    alt="Google"
                                />
                                Sign in with Google
                            </button>
                        </div>

                        {/* VISUAL DIVIDER */}
                        <div className="relative flex items-center justify-center py-2">
                            <div className="absolute w-full border-t border-base-300/60"></div>
                            <span className="relative bg-base-100 px-4 text-[10px] uppercase text-neutral/40 font-bold tracking-widest">
                                Or with email
                            </span>
                        </div>

                        {/* EMAIL CREDENTIALS FORM */}
                        <form onSubmit={handleLogin} className="space-y-4">

                            {/* Email Input */}
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
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full h-14 pl-12 rounded-2xl font-medium focus:input-primary bg-base-100 transition-all text-neutral"
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
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

                            {/* Forgot Password Link */}
                            <div className="flex justify-end text-xs">
                                <Link
                                    href="#"
                                    className="font-bold text-primary hover:underline underline-offset-4 transition-all"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn btn-primary w-full h-14 rounded-2xl text-base font-black shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-base-100 mt-2 group"
                            >
                                Sign In
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        {/* FOOTER NAVIGATION */}
                        <div className="text-center pt-2 border-t border-base-300/40">
                            <p className="text-sm text-neutral/60 font-medium">
                                New to PetNest?{' '}
                                <Link
                                    href="/register"
                                    className="text-primary font-black hover:underline underline-offset-4 transition-all"
                                >
                                    Create an account
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
} 