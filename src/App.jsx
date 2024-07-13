import About from './components/About';
import Home from './components/Home'
import Home2 from './components/Home2'
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
 


function App() {

  return (
    <>
      <NavBar/>
      <Home2></Home2>
      {/* <Home/> */}
      <Introduction/>

      <Projects/>
      <Experience/>
      <Contact/>
      <About/>
    </>
  )
}

export default App
