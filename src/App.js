import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import NavbarUser from './Components/NavbarUser';
import HeroSection from './Components/HeroSection';
import Card from './Components/Card';
import LiveContainer from './Components/LiveContainer';
import RecentlyContainer from './Components/RecentlyContainer';
import Footer from './Components/Footer';
import Login from './Components/Login';
import React from 'react';

function App() {

  return (
    <Router>
      <div className="App">

        <Switch>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/user'>
            <NavbarUser />
            <HeroSection />
            <LiveContainer />
            <RecentlyContainer />
            <Footer />
          </Route>

          <Route path='/'>
            <Navbar />
            <HeroSection />
            <LiveContainer />
            <RecentlyContainer />
            <Footer />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;


// const defaultState = {
//   flag: false
// };

// class App extends React.Component {
//   state = defaultState;

//   succesLogin = () => {
//     this.setState({
//       flag: true
//     })
//   }

//   render() {
//     return (
//       <Router>
//         <div className="App">

//           <Switch>

//             <Route path='/login'>
//               <Login flag={this.state.flag} onSuccess={this.succesLogin}/>
//             </Route>

//             <Route path='/'>
//               <Navbar flag={this.state.flag} />
//               <HeroSection />
//               {/* <div className="card-container">
//               <Card live={true}/>
//               <Card live={true}/>
//               <Card live={true}/>
//             </div> */}
//               <LiveContainer />
//               <RecentlyContainer />
//               <Footer />
//             </Route>

//           </Switch>

//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

