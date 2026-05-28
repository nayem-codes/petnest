import { Award, ShieldCheck, HeartHandshake } from "lucide-react";

const ShelterStats = () => {
  return (
    <section className="py-16 bg-base-200/30 border-t border-base-300/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="stats stats-vertical lg:stats-horizontal w-full bg-base-100 border border-base-300/60 shadow-xs rounded-3xl p-4 divide-y lg:divide-y-0 lg:divide-x divide-base-300/40">
          
          {/* Stat Item 1 */}
          <div className="stat p-6 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="stat-title text-xs uppercase font-bold text-neutral/80 tracking-wider">Successful Adoptions</div>
              <div className="stat-value text-4xl font-black text-primary tracking-tight">1,200+</div>
              <div className="stat-desc font-semibold text-neutral/50">Happy fur babies placed</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
          </div>

          {/* Stat Item 2 */}
          <div className="stat p-6 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="stat-title text-xs uppercase font-bold text-neutral/80 tracking-wider">Partner Shelters</div>
              <div className="stat-value text-4xl font-black text-neutral tracking-tight">45</div>
              <div className="stat-desc font-semibold text-neutral/50">Verified local facilities</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-neutral/10 text-neutral flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>

          {/* Stat Item 3 */}
          <div className="stat p-6 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="stat-title text-xs uppercase font-bold text-neutral/80 tracking-wider">Active Volunteers</div>
              <div className="stat-value text-4xl font-black text-accent tracking-tight">320+</div>
              <div className="stat-desc font-semibold text-neutral/50">Devoted foster heroes</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ShelterStats;