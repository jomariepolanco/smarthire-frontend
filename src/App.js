
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import CandidateContainer from './Candidates/Containers/CandidateContainer';
import ClientContainer from './Clients/Containers/ClientContainer';
import HomeContainer from './Home/Containers/HomeContainer';
import Navbar from './Layout/Navbar';

import Login from './Layout/Login';
import { connect } from 'react-redux';
import { startUserSession } from './Redux/users/actions';
import Signup from './Layout/Signup';

class App extends React.Component{

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token){
      this.props.startUserSession()
    }
  }

  render(){
    return (
      <> 
      {this.props.user ?
      
        <div className="App">
          <Navbar />
          <Switch>

            <Route path='/home' render={(routerProps) => <HomeContainer routerProps={routerProps} />} />

            <Route path='/candidates' render={() => <CandidateContainer user={this.props.user}/>} />

            <Route path='/clients' render={() => <ClientContainer user={this.props.user}/>} />

            <Route path='/' render={() => <h1>HireSmart</h1>} />

          </Switch> 
      </div>
    
      :
        <>
          <Switch>
                <Route path='/login' render={(routerProps) => <Login history={routerProps.history} />} />

                <Route path='/signup' render={(routerProps) => <Signup history={routerProps.history} />} />
          </Switch>
          <Redirect to='/signup' />
        </>
      }
      </>
    );
  }

}

const msp = (state) => {
  return {
    user: state.user
  }
}

const mdp = (dispatch) => {
  return {
    startUserSession: () => dispatch(startUserSession())
  }
}
export default connect(msp, mdp)(App);
