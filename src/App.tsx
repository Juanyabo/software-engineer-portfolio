import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App