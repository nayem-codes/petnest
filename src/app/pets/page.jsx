import PetCard from "@/components/PetCard";
import { fetchPets } from "@/lib/pets/data";
import { BookOpen, Filter } from "lucide-react";



const PetPage = async() => {
    const pets = await fetchPets();

    return (
        <div className="min-h-screen bg-slate-50">
            {/* <PetHeader /> */}

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-primary" />
                        All Pets
                    </h2>
                    <button className="btn btn-secondary text-slate-800 rounded-full px-6 font-bold">

                        <Filter className="w-4 h-4" />

                        Filters

                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        pets?.map((pet) => <PetCard key={pet._id} pet={pet}/>)
                    }

                </div>

            </main>

        </div>
    );
};

export default PetPage;