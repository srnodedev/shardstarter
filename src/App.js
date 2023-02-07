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
  const handleWindowSizeChange = () => {
    setAbc(window.innerWidth);
    width = window.innerWidth
    document.getElementById('app').setAttribute("transform", `scale('calc(${width}/1920)', 'calc((${width}/1920)')`)
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="app" style={{
      transform: `scale(calc(${width}/1920), calc(${width}/1920))`,
      transformOrigin: "top left",
      width: 1899,
      height: 10578 * ((width / 1920) > 1 ? 1 : (width / 1920))
    }}>
      <Particles id="tsparticles" />
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
  );
}

export default App;
