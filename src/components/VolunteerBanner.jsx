const VolunteerBanner = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral/80 text-neutral-content rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 group">
          
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl z-10">
            <span className="badge badge-accent rounded-full font-black text-[10px] uppercase tracking-wider px-3 py-2">
              Join Our Crew
            </span>
            <h3 className="text-3xl font-black tracking-tight text-white">
              Not Ready to Adopt? Try Fostering!
            </h3>
            <p className="text-neutral-content/70 font-medium text-sm leading-relaxed">
              Open your temporary home to animals transitioning from emergency situations. Food and medical checkup bills are 100% handled by NestNetwork.
            </p>
          </div>

          <div className="shrink-0 z-10 w-full lg:w-auto">
            <button className="btn btn-primary btn-md md:btn-lg rounded-full font-black w-full lg:w-auto px-8 shadow-sm text-base-100 hover:scale-105 active:scale-95 transition-all">
              Become a Foster Parent
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VolunteerBanner;