import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FitnessGoal from "./components/FitnessGoal";
import BestOffers from "./components/BestOffers";
import Services from "./components/Services";
import BestPlan from "./components/BestPlan";
import Testimonials from "./components/Testimonials";

function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <FitnessGoal/>  
      <BestOffers/>
      <Services/>
      <BestPlan/>
      <Testimonials/>
    </>
  )
}

export default App
