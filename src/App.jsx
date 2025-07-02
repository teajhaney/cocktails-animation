import { Cocktails, Hero, NavBar } from './components';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText, CSSPlugin);
function App() {
  return (
    <>
      <main className="">
        <NavBar />
        <Hero />
        <Cocktails />
      </main>
    </>
  );
}

export default App;
