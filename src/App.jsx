import './App.css'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Hero from './components/Hero/Hero'
import Navabar from './components/Navbar/Navabar'
import Programs from './components/Programs/Programs'
import Testimonial from './components/Testimonial/Testimonial'
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
      <Title subTitle="Gallery" title='Campus Photo'/>
      <Campus />
      <Title subTitle="TESTIMONIALS" title='What Students Says'/>
      <div className="container">
      <Testimonial />
      </div>

      </div>
       
    </>
  )
}

export default App
