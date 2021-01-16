
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './Home/Containers/HomeContainer';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/home' render={(routerProps) => <HomeContainer routerProps={routerProps}/>} />
      </Switch>
      
    </div>
  );
}

export default App;
