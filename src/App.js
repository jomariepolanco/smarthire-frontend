
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CandidateContainer from './Candidates/Containers/CandidateContainer';
import ClientContainer from './Clients/Containers/ClientContainer';
import HomeContainer from './Home/Containers/HomeContainer';
import JobsContainer from './Jobs/Containers/JobsContainer';
import Navbar from './Layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/home' render={(routerProps) => <HomeContainer routerProps={routerProps}/>} />

        <Route path='/candidates' render={() => <CandidateContainer />} />

        <Route path='/clients' render={() => <ClientContainer />} />
        {/* <Route path='/jobs' render={() => <JobsContainer />} /> */}
      </Switch> 
      
    </div>
  );
}

export default App;
