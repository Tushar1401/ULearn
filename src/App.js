import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path='/'>
            <Navbar />
            <HeroSection />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
