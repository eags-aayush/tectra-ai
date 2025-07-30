import IO from "./components/IO"
import Hero from "./components/Hero"
import TeamCards from "./components/TeamCards"
import ProblemStatement from "./components/ProblemStatement";
import SolutionOverview from "./components/SolutionOverview";

const App = () => {

  return (
    <div className="flex flex-col relative min-h-screen bg-black items-center justify-center text-white font-[Zen Tokyo Zoo]">
      <Hero />
      <TeamCards />
      <IO />
      <ProblemStatement />
      <SolutionOverview />
    </div>
  );
}

export default App