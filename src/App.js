import './App.css';
import Header from './Header Page/Header';
import Home from './Home Pages/Home';
import Checkout from './Checkout Pages/Checkout';
import Login from './Login Page/Login';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Check } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path='/checkout'><Header/><Checkout/></Route>
          <Route exact path='/'><Header/><Home/></Route>
          <Route path='/login'><Login/></Route>

        </Switch>  
      </div>
    </Router>
  );
}

export default App;
