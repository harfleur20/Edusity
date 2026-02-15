import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navabar from './components/Navbar/Navabar'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'

function App() {
  

  return (
    <>
      <div>
      <Navabar />
      <Hero />
      <Title subTitle="Our PROGRAM" title='What we Offer'/>
      <Programs />
      <About />
      </div>
       
    </>
  )
}

export default App
