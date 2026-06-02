// import EnrollmentButton from '@/components/EnrollmentButton'; // Keep your custom interactive client trigger
import { auth } from '@/lib/auth';
import { Calendar, MessageSquare, ShieldCheck, MapPin, Syringe, Activity, Sparkles, Heart } from 'lucide-react';
import { headers } from 'next/headers';
import Image from 'next/image';

// bearer tokens
const fetchSinglePet = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
        headers: {
            authorization: `Bearer ${token}` || ""
        }
    });
    
    // Explicit return fallback matching standard backend arrays
    if (!res.ok) return null;
    const data = await res.json();
    return data || null;
};

export default async function PetDetails({ params }) {
    const { id } = await params;
    
    // Get identity session tokens 
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const pet = await fetchSinglePet(id, token);

    // If no pet data returned, stop and render our structural UI fallback
    // if (!pet) {
    //     return <PetNotFound />;
    // }

    const { 
        _id, 
        petName, 
        species, 
        breed, 
        age, 
        gender, 
        imageUrl, 
        healthStatus, 
        vaccinationStatus, 
        location, 
        adoptionFee, 
        description 
    } = pet;

    // Map properties
    const petMetrics = [
        { label: 'Age', value: `${age} ${age === 1 ? 'Year' : 'Years'}` },
        { label: 'Breed', value: breed || 'Mixed' },
        { label: 'Gender', value: gender },
        { label: 'Species', value: species },
    ];

    // Read-only parameters fallbacks extracted directly out of user session metadata
    const applicantName = session?.user?.name || "Guest User";
    const applicantEmail = session?.user?.email;

    // Direct Next.js 15 Server Action handler configuration
    async function handleAdoptionSubmit(formData) {
        'use server';
        
        const applicationPayload = {
            petId: _id,
            petName: petName,
            userName: applicantName,
            userEmail: applicantEmail,
            pickupDate: formData.get('pickupDate'),
            message: formData.get('message'),
            status: 'pending' 
        };

        console.log('Sending Form Application Payload to DB Cluster...', applicationPayload);
        
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-base-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                
                {/* LEFT MAIN DETAILS */}
                <div className="lg:col-span-2 space-y-8">
                    
                   
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">
                        <Image
                            src={imageUrl || 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200'}
                            alt={petName}
                            fill
                            className="object-cover object-t transform transition duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute top-6 left-6">
                            <span className="badge badge-success font-bold gap-1.5 px-4 py-3.5 rounded-full shadow-xl text-base-100 uppercase tracking-wider text-xs">
                                <Sparkles className="w-3.5 h-3.5" /> Available to Adopt
                            </span>
                        </div>
                    </div>

                    {/* Meta and Copy Headers */}
                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="badge badge-primary badge-outline font-bold px-3 py-2.5 rounded-md text-xs uppercase tracking-wider">
                                {species}
                            </span>
                            <div className="flex items-center gap-1 text-sm font-semibold text-neutral/60">
                                <MapPin className="w-4 h-4 text-primary" />
                                {location || 'Sanctuary Shelter'}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-neutral tracking-tight leading-tight">
                            Meet {petName}
                        </h1>
                        <p className="text-xl text-neutral/70 leading-relaxed font-medium">
                            {description}
                        </p>
                    </div>

                    {/* Characteristic metrics mapping loops */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                        {petMetrics.map((metric, i) => (
                            <div
                                key={i}
                                className="bg-base-200/50 p-5 rounded-2xl border border-base-300/40 text-center hover:bg-base-100 hover:shadow-xl transition-all duration-300"
                            >
                                <p className="text-[11px] font-bold text-neutral/40 uppercase tracking-widest mb-1">{metric.label}</p>
                                <p className="text-lg font-black text-neutral">{metric.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Medical Health and Vaccination Trackers */}
                    <div className="p-5 bg-base-200/40 rounded-3xl border border-base-300/30 flex flex-col sm:flex-row gap-6 justify-around">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl">
                                <Syringe className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-neutral/40 uppercase tracking-wider">Vaccination Record</p>
                                <p className="font-bold text-neutral">{vaccinationStatus || 'Pending Review'}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-2xl">
                                <Activity className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-neutral/40 uppercase tracking-wider">Health Assessment</p>
                                <p className="font-bold text-neutral">{healthStatus || 'Healthy'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE PANEL STICKY ADOPTION REQUEST ACTION PANEL */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-base-100 p-8 rounded-[2rem] border border-base-300/60 shadow-2xl space-y-6">
                        
                        {/* Financial Adoption Fee header layout */}
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-neutral/40 uppercase tracking-widest">Adoption Fee</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black text-primary">
                                    {typeof adoptionFee === 'number' && adoptionFee > 0 ? `$${adoptionFee}` : 'Free Adoption'}
                                </span>
                            </div>
                        </div>

                        <div className="divider my-1 before:bg-base-300/40 after:bg-base-300/40"></div>

                        {/* Interactive Server Action Form */}
                        <form action={handleAdoptionSubmit} className="space-y-4">
                            <h3 className="text-lg font-bold text-neutral flex items-center gap-2">
                                <Heart className="w-5 h-5 text-error fill-error" /> 
                                Request Adoption
                            </h3>

                            {/* Pet Name - Read Only Input */}
                            <div className="form-control w-full space-y-1">
                                <label className="label-text text-xs font-bold text-neutral/60 uppercase tracking-wider ml-1">Pet Name</label>
                                <input 
                                    type="text" 
                                    value={petName} 
                                    readOnly 
                                    className="input input-bordered w-full bg-base-200 text-neutral font-semibold rounded-xl cursor-not-allowed focus:outline-none" 
                                />
                            </div>

                            {/* User Profile Identity - Read Only Input */}
                            <div className="form-control w-full space-y-1">
                                <label className="label-text text-xs font-bold text-neutral/60 uppercase tracking-wider ml-1">Your Name</label>
                                <input 
                                    type="text" 
                                    value={applicantName} 
                                    readOnly 
                                    className="input input-bordered w-full bg-base-200 text-neutral font-semibold rounded-xl cursor-not-allowed focus:outline-none" 
                                />
                            </div>

                            {/* User Contact Mail - Read Only Input */}
                            <div className="form-control w-full space-y-1">
                                <label className="label-text text-xs font-bold text-neutral/60 uppercase tracking-wider ml-1">Your Email</label>
                                <input 
                                    type="email" 
                                    value={applicantEmail} 
                                    readOnly 
                                    className="input input-bordered w-full bg-base-200 text-neutral font-semibold rounded-xl cursor-not-allowed focus:outline-none" 
                                />
                            </div>

                            {/* Pickup Date Input Picker */}
                            <div className="form-control w-full space-y-1">
                                <label className="label-text text-xs font-bold text-neutral/60 uppercase tracking-wider ml-1">Desired Pickup Date</label>
                                <div className="relative flex items-center">
                                    <Calendar className="w-4 h-4 text-neutral/40 absolute left-4 pointer-events-none" />
                                    <input 
                                        type="date" 
                                        name="pickupDate" 
                                        required 
                                        className="input input-bordered w-full pl-12 text-neutral font-medium rounded-xl focus:input-primary bg-base-100 transition-all" 
                                    />
                                </div>
                            </div>

                            {/* Message Field TextArea Text Input Box */}
                            <div className="form-control w-full space-y-1">
                                <label className="label-text text-xs font-bold text-neutral/60 uppercase tracking-wider ml-1">Message to Shelter</label>
                                <div className="relative flex items-start">
                                    <MessageSquare className="w-4 h-4 text-neutral/40 absolute left-4 top-4 pointer-events-none" />
                                    <textarea 
                                        name="message" 
                                        required
                                        placeholder="Tell us about your home setup and pet parenting background..." 
                                        rows={3}
                                        className="textarea textarea-bordered w-full pl-12 pt-3.5 text-neutral font-medium rounded-xl focus:textarea-primary bg-base-100 transition-all text-sm leading-relaxed resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Execution Button */}
                            <button 
                                type="submit" 
                                className="btn btn-primary w-full rounded-xl font-bold text-base-100 shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all mt-2"
                            >
                                Adopt {petName}
                            </button>
                        </form>

                        {/* Informative Footer Banner Guard */}
                        <div className="flex items-center justify-center gap-2 pt-2 border-t border-base-300/40 text-[11px] text-neutral/40 font-bold text-center">
                            <ShieldCheck className="w-4 h-4 text-success" />
                            <span>Requests automatically switch status to 'pending' upon creation.</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

// 404 Route UI Fallback Handler
