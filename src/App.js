import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landings from './Components/Landings';
import Pages from './Components/Pages';
import Menu from './Components/Menu';
import Home from './Components/Home';
function App() {
  return (
    <div className="mainContent">
    <BrowserRouter>
    <Menu/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/landings" component={Landings}></Route>
      <Route path="/pages" component={Pages}></Route>
    </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
