import { Heart, ShieldCheck, Sparkles, Home } from "lucide-react";

const WhyAdopt = () => {
  const reasons = [
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Save a Precious Life",
      desc: "Over one million shelter animals are euthanized each year. Adopting gives a deserving pet a second chance at happiness."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      title: "Healthier Companions",
      desc: "Shelter pets receive complete medical evaluations, vaccinations, and are spayed or neutered before entering your home."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      title: "Break the Puppy Mills",
      desc: "Adoption tackles commercial breeding operations that prioritize profit over animal welfare and health standards."
    },
    {
      icon: <Home className="w-6 h-6 text-primary" />,
      title: "Already House-Trained",
      desc: "Many rescue pets come from previous homes, meaning they already understand basic household manners and simple commands."
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge badge-primary font-bold uppercase tracking-wider text-xs px-3 py-2.5 rounded-full">
            The Right Choice
          </span>
          <h2 className="text-4xl font-black text-neutral tracking-tight">Why Adopt Instead of Buy?</h2>
          <p className="text-neutral/60 font-medium">Choosing rescue transforms more than just one life—it builds a kinder community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="card bg-base-200/50 border border-base-300/40 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-base-100 hover:shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-base-100 shadow-xs flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-neutral mb-2">{item.title}</h3>
              <p className="text-sm text-neutral/70 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAdopt;