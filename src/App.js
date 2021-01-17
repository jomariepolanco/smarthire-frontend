
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CandidateContainer from './Candidates/Containers/CandidateContainer';
import HomeContainer from './Home/Containers/HomeContainer';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/home' render={(routerProps) => <HomeContainer routerProps={routerProps}/>} />

        <Route path='/candidates' render={() => <CandidateContainer />} />
      </Switch> 
      
    </div>
  );
}

export default App;
