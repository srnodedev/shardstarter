import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Launchpad from './Components/Launchpad'
import Navbar from './Components/Navbar'
import Discover from './Components/Discover'
import Apply from './Components/Apply'
import Invest from './Components/Invest'
import Insurance from './Components/Insurance'
import Roadmap from './Components/Roadmap'
import { useEffect, useState } from 'react'
import Particles from './Components/Particles'
var width = window.innerWidth 

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [abc, setAbc] = useState(window.innerWidth)
  console.log(width, (width - 21) / 1920)
  const handleWindowSizeChange = () => {
    setAbc(window.innerWidth);
    width = window.innerWidth
    console.log(width, (width - 10) / 1920)
    // document.getElementById('app').setAttribute("transform", `scale('calc(${width - 21}/1920)', 'calc((${width}/1920)')`)
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div>
        <Particles id="tsparticles" rate={width / 1920} />
      </div>
      <div id="app" style={{
        transform: `scale(calc(${width - 10} / 1920), calc(${width} / 1920))`,
        transformOrigin: "top left",
        width: 1920,
        // width: 1920 - 21 * (width / 1920),
        height: 10578 * ((width / 1920) > 1 ? 1 : (width / 1920)),
      }}>
        <Header />
        <Launchpad />
        <Navbar />
        <Discover />
        <Roadmap />
        <Invest />
        <Insurance />
        <Apply />
        <Footer />
      </div>
    </div>
  );
}

export default App;
