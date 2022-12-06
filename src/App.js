
import './App.css';
import About from './Components/About';
import Contact2 from './Components/Contact2';
import Footer from './Components/Footer';
import Github from './Components/Github';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import ResumeNew from './Components/Resume';
import Skill from './Components/Skill';
import Statistics from './Components/Statistics';
import Tool from './Components/Tool';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
   <About/>
   <Skill/>
   <Projects/>
   
   {/* <Statistics/> */}
   <Github/>
   <ResumeNew/>
   <Contact2/>
   <Footer/>
    </div>
  );
}


export default App;
