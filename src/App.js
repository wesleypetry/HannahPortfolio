import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import HeaderBar from './Pages/HeaderBar';
import FooterBar from './Pages/FooterBar';
import Contact from './Pages/Contact';
import Work from './Pages/Work';

function App() {
  return (
    <div className="App">
        <HeaderBar/>
        <div className="Content">
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/About" component={About} exact />
                <Route path="/Contact" component={Contact} exact />
                <Route path="/Work" component={Work} exact />
              </Switch>
          </BrowserRouter>
        </div>
        <FooterBar/>
      </div>
  );
}

export default App;
