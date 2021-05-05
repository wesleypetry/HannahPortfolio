import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
        <div className="Content">
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/About" component={About} exact />
              </Switch>
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
