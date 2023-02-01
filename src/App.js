import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Launchpad from './Components/Launchpad'
import Navbar from './Components/Navbar'
import Discover from './Components/Discover'
import Apply from './Components/Apply'
import Invest from './Components/Invest'
import Insurance from './Components/Insurance'
import Roadmap from './Components/Roadmap'

const App = () => {
  return (
    <div className=''>
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
