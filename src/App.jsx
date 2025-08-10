import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  return (
    <main>
      <dir>
        <h1 className="text-3xl text-red-300">Wakanda</h1>
      </dir>
    </main>
  );
};

export default App;
