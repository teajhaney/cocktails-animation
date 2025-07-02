import { About, Cocktails, Hero, NavBar, Art, Menu ,Contact} from './components';
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
        <Menu />
          <Contact />
      </main>
    </>
  );
}

export default App;
