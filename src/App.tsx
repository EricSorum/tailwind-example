import Header from './components/layout/Header'
import Hero from './components/layout/Hero'
import About from './components/layout/About'
import Features from './components/layout/Features'
import Products from './components/layout/Products'
import Footer from './components/layout/Footer'
import './output.css'

function App() {

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Hero />
      <About />
      <Features />
      <Products />
      <Footer />
   </div>
  )
}

export default App
