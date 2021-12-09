import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Work from './Pages/Work';
import About from './Pages/About';
import HeaderBar from './Pages/HeaderBar';
import FooterBar from './Pages/FooterBar';
import UXDesign from './Pages/Projects/UXDesign';
import BrandConcept from './Pages/Projects/BrandConcept';

function App() {
  return (
    <div className="App">
        <HeaderBar/>
        <div className="Content">
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Work} exact/>
                <Route path="/About" component={About} exact/>
                <Route path="/UXDesign" component={UXDesign} exact />
                <Route path="/BrandConcept" component={BrandConcept} exact />
              </Switch>
          </BrowserRouter>
          <FooterBar/>
        </div>
      </div>
  );
}

export default App;
