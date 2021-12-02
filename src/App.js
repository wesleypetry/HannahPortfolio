import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Work from './Pages/Work';
import About from './Pages/About';
import HeaderBar from './Pages/HeaderBar';
import FooterBar from './Pages/FooterBar';
import Resume from './Pages/Resume';
import UXDesign from './Pages/Projects/UXDesign';

function App() {
  return (
    <div className="App">
        <HeaderBar/>
        <div className="Content">
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Work} exact/>
                <Route path="/About" component={About} exact />
                <Route path="/Resume" component={Resume} exact />
                <Route path="/UXDesign" component={UXDesign} exact />
              </Switch>
          </BrowserRouter>
          <FooterBar/>
        </div>
      </div>
  );
}

export default App;
