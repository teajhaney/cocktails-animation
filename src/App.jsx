import { Hero, NavBar } from './components';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <main className="">
        <NavBar />
        <Hero />
      </main>
    </>
  );
}

export default App;
