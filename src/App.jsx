import { About, Cocktails, Hero, NavBar, Art } from './components';
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
        <About />
          <Art />
      </main>
    </>
  );
}

export default App;
