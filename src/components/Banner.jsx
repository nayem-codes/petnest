export default function Banner() {
  return (
    <div className="relative min-h-[85vh] flex items-center bg-base-100 overflow-hidden px-4 sm:px-8 lg:px-16 py-12">
      
      {/* Playful Background Blob Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        
        {/* LEFT COLUMN: Catchy Content */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left space-y-6">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center justify-center lg:justify-start gap-2">
            <span className="badge badge-primary badge-outline rounded-full px-4 py-3 font-semibold text-sm tracking-wide gap-1.5 shadow-xs">
              🐶 Find Your Best Friend
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral leading-[1.1] tracking-tight">
            Every pet deserves a <br className="hidden sm:inline" />
            <span className="text-primary relative inline-block">
              loving home.
              {/* Artistic underline decoration */}
              <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary rounded-full -z-10 transform translate-y-1" />
            </span>
          </h1>

          {/* Short Description */}
          <p className="text-neutral/70 text-lg sm:text-xl font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Ready to bring endless joy and wet nose boops into your life? PetNest connects you with wonderful local animals waiting for a second chance at happiness.
          </p>

          {/* CTA Button Block */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="btn btn-primary rounded-full px-8 py-4 h-auto text-lg font-bold shadow-md shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95 group">
              Adopt Now
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">🐾</span>
            </button>
            
            <button className="btn btn-ghost hover:bg-secondary/40 rounded-full px-6 text-neutral font-semibold text-base transition-colors">
              How it works
            </button>
          </div>

          {/* Quick Micro-Trust Badges */}
          <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 border-t border-base-300/40 max-w-md">
            <div>
              <p className="text-2xl font-black text-neutral">1,200+</p>
              <p className="text-xs font-semibold text-neutral/50 uppercase tracking-wider">Pets Adopted</p>
            </div>
            <div className="h-8 w-[1px] bg-base-300" />
            <div>
              <p className="text-2xl font-black text-neutral">45+</p>
              <p className="text-xs font-semibold text-neutral/50 uppercase tracking-wider">Shelter Partners</p>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Playful Background Design + Pinterest Aesthetic Image */}
        <div className="lg:col-span-6 flex justify-center items-center w-full">
          <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
            
            {/* Playful background frame layers */}
            <div className="absolute inset-0 bg-secondary rounded-[40px] rotate-6 scale-95 transition-transform duration-500 hover:rotate-3 shadow-xs" />
            <div className="absolute inset-0 bg-primary/20 rounded-[40px] -rotate-3 scale-100" />

            {/* Main Image Container */}
            <div className="absolute inset-0 bg-base-200 rounded-[40px] overflow-hidden shadow-lg border-4 border-base-100 transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="https://i.pinimg.com/564x/41/dd/8d/41dd8d1033230b4ec748283f5108f435.jpg" 
                alt="Happy dog looking ready for adoption" 
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
              />
              
              {/* Micro Overlay Card inside image */}
              <div className="absolute bottom-4 left-4 right-4 bg-base-100/95 backdrop-blur-xs p-4 rounded-2xl border border-base-300/30 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center text-lg">🐶</div>
                  <div>
                    <h4 className="font-bold text-neutral text-base leading-tight">Milo</h4>
                    <p className="text-xs text-neutral/60 font-medium">Golden Retriever Mix • 2 yrs</p>
                  </div>
                </div>
                <span className="badge badge-accent font-bold px-3 py-2.5 rounded-xl text-xs text-base-100">
                  Friendly
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}