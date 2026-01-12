import Hero from "../components/features/homePage/Hero.jsx";
import TechStack from "../components/features/homePage/TechStack.jsx";
import ProblemSolution from "../components/features/homePage/ProblemSoultion.jsx";
import CoreServices from "../components/features/homePage/CoreServices.jsx";
import FounderMessage from "../components/features/homePage/FounderMessage.jsx";
import { AnimateOnScroll } from "../components/common/AnimateOnScroll.jsx";

function Home() {
    return (
        <div className="min-h-screen w-full bg-surface-page overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 z-0 opacity-[0.15] 
                bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] 
                bg-size-[40px_40px] mask-[linear-gradient(to_bottom,black_90%,transparent_100%)]"/>


                {/* INCREASED INTENSITY BACKGROUND GLOW */}
                <div className="absolute top-5 left-1/7 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/50 blur-[140px]  "></div>
                <div className="absolute bottom-0 left-1/6 h-150 w-150 translate-x-1/2 translate-y-1/2 rounded-full bg-primary/50 blur-[140px]  "></div>
                <div className="absolute top-0 right-1/9 h-100 w-125 translate-x-1/4 -translate-y-1/2 rounded-full bg-primary/50  blur-[140px] "></div>
            </div>

            {/* Main content sections with staggered animations */}
            <main className="relative z-10">
                <AnimateOnScroll delay={0}>
                    <Hero />
                </AnimateOnScroll>

                <AnimateOnScroll delay={100}>
                    <TechStack />
                </AnimateOnScroll>

                <AnimateOnScroll delay={100}>
                    <ProblemSolution />
                </AnimateOnScroll>

                <AnimateOnScroll delay={100}>
                    <CoreServices />
                </AnimateOnScroll>

                <AnimateOnScroll delay={100}>
                    <FounderMessage />
                </AnimateOnScroll>
            </main>
        </div>
    )
}
export default Home;