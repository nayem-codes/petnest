import { Lightbulb } from "lucide-react";

const PetCareTips = () => {
  const tips = [
    {
      title: "The First 3 Days: Decompression Phase",
      content: "Don't overwhelm a new pet with excessive friends, noise, or environments right away. Set up a secure, dedicated quiet room with food, water, and comforting layers where they can safely adjust."
    },
    {
      title: "Establishing a Consistent Feeding & Walking Routine",
      content: "Animals find safety in predictable environments. Feed and walk your new pet at the exact same times every day to minimize moving anxieties and keep housebreaking tasks reliable."
    },
    {
      title: "Scheduling the Initial Vet Checkup",
      content: "Even though shelter pets come fully vaccinated, schedule a general practitioner checkup within 14 days of arrival to secure local prescriptions, monitor baselines, and review dental care plans."
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12 space-y-3">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center mx-auto shadow-xs mb-2">
            <Lightbulb className="w-5 h-5 fill-amber-500/20" />
          </div>
          <h2 className="text-4xl font-black text-neutral tracking-tight">Essential Post-Adoption Tips</h2>
          <p className="text-neutral/60 font-medium">Smooth adjustments require patience. Here is how to nail your first couple of weeks together.</p>
        </div>

        <div className="space-y-3">
          {tips.map((tip, index) => (
            <div key={index} className="collapse collapse-plus bg-base-200/50 border border-base-300/40 rounded-2xl">
              <input type="radio" name="care-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-base font-bold text-neutral px-6 py-4">
                {tip.title}
              </div>
              <div className="collapse-content px-6 pb-4 text-sm text-neutral/70 font-medium leading-relaxed">
                <p>{tip.content}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetCareTips;