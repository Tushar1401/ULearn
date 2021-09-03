import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Card from './Components/Card';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path='/'>
            <Navbar />
            <HeroSection />
            <div className="card-container">
              <Card live={true}/>
              <Card live={true}/>
              <Card live={true}/>
            </div>
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
