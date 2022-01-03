import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Work from './Pages/Work';
import About from './Pages/About';
import HeaderBar from './Pages/HeaderBar';
import FooterBar from './Pages/FooterBar';
import UXDesign from './Pages/Projects/UXDesign';
import BrandConcept from './Pages/Projects/BrandConcept';
import Accrue from './Pages/Projects/Accrue';
import POH from './Pages/Projects/POH';
import ClemsonFrisbee from './Pages/Projects/ClemsonFrisbee';
import Octoholic from './Pages/Projects/Octoholic';

function App() {
  return (
    <div className="App">
        <div className="Content">
          <BrowserRouter basename="/react">
            <HeaderBar/>
              <Switch>
                <Route path="/" component={Work} exact/>
                <Route path="/About" component={About} exact/>
                <Route path="/UXDesign" component={UXDesign} exact />
                <Route path="/BrandConcept" component={BrandConcept} exact />
                <Route path="/Accrue" component={Accrue} exact />
                <Route path="/POH" component={POH} exact />
                <Route path="/ClemsonFrisbee" component={ClemsonFrisbee} exact />
                <Route path="/Octoholic" component={Octoholic} exact />
              </Switch>
              <FooterBar/>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
