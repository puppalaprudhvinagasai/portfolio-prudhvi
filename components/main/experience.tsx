import { SparklesIcon } from "@heroicons/react/24/solid";
import { EXPERIENCES } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-16 z-20 max-w-7xl mx-auto w-full"
    >
      <div className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mb-4">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Achievements &amp; Milestones
        </h1>
      </div>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-12 text-center">
        Experience &amp; Hackathons
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {EXPERIENCES.map((item) => (
          <div
            key={item.title}
            className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.6)] backdrop-blur-md p-6 flex flex-col justify-between hover:border-[#7042f88b] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-[#7042f88b] bg-[#7042f81a] text-[#b49bff]">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-cyan-400 mb-3">
                {item.organization}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
