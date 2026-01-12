import Hero from "../components/features/homePage/Hero.jsx";
import TechStack from "../components/features/homePage/TechStack.jsx";
import ProblemSolution from "../components/features/homePage/ProblemSoultion.jsx";
import CoreServices from "../components/features/homePage/CoreServices.jsx";
import FounderMessage from "../components/features/homePage/FounderMessage.jsx";

function Home() {
    return (
        <>
            <Hero />
            <TechStack/>
            <ProblemSolution/>
            <CoreServices/> 
            <FounderMessage/>
        </>
    )
}
export default Home;