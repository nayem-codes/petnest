import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PetCard from "./PetCard";
import { fetchFeaturedPets} from "@/lib/pets/data";

const FeaturePets = async () => {
    const pets = await fetchFeaturedPets();

    return (
        <section className="py-24 bg-base-200/50 border-y border-base-300/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* SECTION HEADER BLOCK */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-3 text-center md:text-left w-full md:w-auto">
                        <span className="badge badge-primary badge-outline font-bold uppercase tracking-widest text-xs px-3 py-2 rounded-full">
                          🐾 Meet Our Residents
                        </span>
                        <h2 className="text-4xl font-black text-neutral tracking-tight">
                            Pets Waiting for You
                        </h2>
                        <p className="text-neutral/70 max-w-xl font-medium text-sm sm:text-base leading-relaxed">
                            Meet these wonderful animals who are ready to start their forever journeys. Could your nest be their perfect match?
                        </p>
                    </div>

                    {/* View All Button utilizing dynamic daisyUI styling */}
                    <Link href="/pets" className="w-full md:w-auto">
                        <button className="btn btn-secondary/60 hover:btn-primary w-full md:w-auto rounded-full font-bold group px-6 text-neutral hover:text-base-100 transition-all duration-200">
                            View All Companions 
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>

                {/* GRID CONTAINER */}
                {pets && pets.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pets.map((pet) => (
                            <PetCard key={pet?._id} pet={pet} />
                        ))}
                    </div>
                ) : (
                    /* Fallback empty state layout if no pets are currently up for adoption */
                    <div className="text-center py-16 bg-base-100 rounded-3xl border border-dashed border-base-300 max-w-md mx-auto p-6">
                        <span className="text-4xl block mb-3">🏡</span>
                        <h4 className="font-bold text-neutral text-lg">All pets are currently cozy!</h4>
                        <p className="text-sm text-neutral/60 mt-1 font-medium">
                            Check back shortly, our local shelter partners update their lists daily.
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default FeaturePets;