import Image from "next/image";

const SuccessStories = () => {
  const stories = [
    {
      quote: "Milo completely changed our home dynamic. He is incredibly gentle, loves morning walks, and the adoption crew guided us beautifully through every single step.",
      author: "Sarah & David",
      pet: "Milo (Adopted Golden Mix)",
      img: "https://i.pinimg.com/736x/dd/d5/2d/ddd52d3d4d8680d6f4770b48efcc5bd1.jpg"
    },
    {
      quote: "Luna was terrified when she arrived, but watching her blossom into a brave, playful lap cat has been one of the most rewarding milestones of our lives.",
      author: "Rahat Rahman",
      pet: "Luna (Adopted Calico)",
      img: "https://i.pinimg.com/736x/13/ae/cd/13aecd485899b904fb71c9f9029274cb.jpg"
    }
  ];

  return (
    <section className="py-20 bg-base-200/40 border-y border-base-300/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="badge badge-secondary rounded-full font-bold uppercase tracking-wider text-xs px-3 py-2.5 text-neutral">
            Success Stories
          </span>
          <h2 className="text-4xl font-black text-neutral tracking-tight">Real Matches, Real Love</h2>
          <p className="text-neutral/60 font-medium">Nothing makes us happier than seeing our alumni thrive with their forever families.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="card md:card-side bg-base-100 rounded-3xl border border-base-300/40 overflow-hidden shadow-xs p-6 gap-6">
              <div className="relative w-full md:w-40 h-40 shrink-0 rounded-2xl overflow-hidden mx-auto md:mx-0">
                <Image 
                  src={story.img} 
                  alt={story.author} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between space-y-4">
                <p className="text-sm italic font-medium text-neutral/80 leading-relaxed">
                  "{story.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-neutral">{story.author}</h4>
                  <p className="text-xs font-semibold text-primary mt-0.5">{story.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;