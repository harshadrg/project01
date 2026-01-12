import { StaticIcon } from "../../common/Icon";

const FounderMessage = () => {
  return (
    <section className="relative py-20 md:py-10 overflow-hidden">

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="p-6 sm:p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Column 1: Founder Visual */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative ">
                {/* Profile Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-2xl bg-neutral-200/20 dark:bg-neutral-800/30 overflow-hidden transform transition-transform duration-500 hover:scale-105">
                  <div className="w-full h-full flex items-center justify-center text-text-muted">
                    <StaticIcon className="w-10 h-10 sm:w-12 sm:h-12 opacity-20">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </StaticIcon>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-3 -right-3 bg-primary text-white p-2 rounded-lg transition-transform duration-300 hover:scale-110">
                  <StaticIcon className="w-5 h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </StaticIcon>
                </div>
              </div>
              
              <h4 className="text-lg sm:text-xl md:text-xl font-bold text-text-main">Your Name / CEO</h4>
              <p className="text-[9px] sm:text-xs font-black tracking-widest text-primary uppercase mt-1">
                Founder & Chief Architect
              </p>
            </div>

            {/* Column 2: Statement */}
            <div className="lg:col-span-8 relative mt-6 lg:mt-0">
              {/* Quote Mark */}
              <span className="absolute -top-10 -left-6 sm:top-10 sm:-left-20 text-primary/10 text-[6rem] sm:text-[11rem] font-serif select-none rotate-3 leading-0 pointer-events-none">
                “
              </span>

              {/* Controlled width text */}
              <div className="relative z-10 max-w-3xl mx-auto lg:mx-0">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-text-main leading-relaxed italic mb-6 sm:mb-8">
                  We didn't start this company just to build websites. We started it to help startups address security challenges before they become problems. Our mission is to make <span className="bg-linear-to-r from-primary/70 to-accent/40 bg-clip-text text-transparent font-semibold">security a natural part</span> of every startup we work with.
                </h3>

                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                    In the startup world, trust is your only currency. We’ve dedicated our architecture to ensuring that when you pitch to your first big client or investor, your security isn't just a checkbox—it’s built into your foundation.
                  </p>

                  {/* Team avatars */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 sm:pt-6">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-surface-border/20 flex items-center justify-center text-[8px] sm:text-[10px] font-bold transition-all duration-300 hover:scale-110">
                          {i === 3 ? '+' : 'Dev'}
                        </div>
                      ))}
                    </div>
                    <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-text-muted mt-1 sm:mt-0">
                      Backed by a Security-First Engineering Team
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
