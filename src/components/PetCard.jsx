import { MapPin, Calendar, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PetCard = ({ pet }) => {
  // Destructuring based on your JSON properties
  const { 
    _id, 
    petName, 
    species, 
    breed, 
    age, 
    gender, 
    imageUrl, 
    location, 
    adoptionFee, 
    description 
  } = pet;

  return (
    <div
      className="group flex flex-col bg-base-100 rounded-3xl border border-base-300/60 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full"
    >
      {/* CARD IMAGE CONTAINER */}
      <div className="relative  aspect-square overflow-hidden bg-base-200">
        <Image 
          src={imageUrl}
          alt={`${petName} picture`}
          height={400}
          width={640}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 h-full w-full"
        />
        
        {/* Playful Floating Species Tag */}
        <div className="absolute top-3 right-3">
          <div className="badge badge-primary rounded-full font-bold text-[10px] uppercase tracking-wider px-3 py-2.5 shadow-sm">
            {species}
          </div>
        </div>

        {/* Gender Badge (Bottom Left overlay) */}
        <div className="absolute bottom-3 left-3">
          <span className={`badge border-0 rounded-lg text-[11px] font-bold px-2.5 py-2 shadow-xs ${
            gender?.toLowerCase() === 'female' 
              ? 'bg-rose-100 text-rose-600' 
              : 'bg-sky-100 text-sky-600'
          }`}>
            {gender}
          </span>
        </div>
      </div>

      {/* CARD MAIN BODY */}
      <div className="p-5 flex flex-col grow space-y-3">
        
        {/* Title, Breed & Price Row */}
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-0.5">
            <Link href={`/pets/${_id}`}>
              <h4 className="font-black text-xl text-neutral group-hover:text-primary transition-colors tracking-tight">
                {petName}
              </h4>
            </Link>
            <p className="text-xs font-semibold text-neutral/50 tracking-wide">
              {breed}
            </p>
          </div>
          {/* Adoption Fee */}
          <div className="text-right">
            <span className="text-xs block font-bold text-neutral/40 uppercase tracking-wider">Fee</span>
            <span className="font-black text-lg text-accent">${adoptionFee}</span>
          </div>
        </div>

        {/* Excerpt Description */}
        <p className="text-sm text-neutral/70 font-medium line-clamp-2 leading-relaxed">
          {description || "A wonderful companion waiting to fill your home with laughter and unconditional love."}
        </p>

        {/* Metadata Details Row (Age & Location) */}
        <div className="flex flex-wrap gap-y-2 items-center justify-between pt-3 text-xs font-bold text-neutral/60 border-t border-base-300/40">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span>{age}</span>
          </div>
          <div className="flex items-center gap-1 max-w-[60%]">
            <MapPin className="w-3.5 h-3.5 text-neutral/40 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-2 mt-auto">
          <Link href={`/pets/${_id}`} className="w-full">
            <button className="btn btn-secondary/40 hover:btn-primary w-full rounded-2xl font-bold transition-all duration-200 text-sm group-hover:shadow-xs text-neutral hover:text-base-100">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PetCard;