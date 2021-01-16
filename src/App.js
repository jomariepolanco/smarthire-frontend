
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './Home/Containers/HomeContainer';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/home' component={HomeContainer} />
      </Switch>
      
    </div>
  );
}

export default App;
