import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation';
import Login from './components/Login';
import LeaderBoard from './components/LeaderBoard';
import NewPoll from './components/NewPoll';
import PageNotFound from './components/PageNotFound';
import { useEffect } from 'react';
import { handleInitData } from './actions/initialData';
import { connect } from "react-redux";
import Home from './components/Home';
import Dashboard from './components/Dashboard';

const App = ({dispatch, logInState}) => {

  useEffect(() => {
    dispatch(handleInitData());
  });

  const handleAuthenticationUser = (currentPage) => {
      return logInState ? currentPage : <Navigate to="/login"/>;
  }

  return (
    <div className="App">
      {logInState && <Navigation />}
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route path="/" element={handleAuthenticationUser(<Home />)} />
        <Route exact path="/leaderboard" element={handleAuthenticationUser(<LeaderBoard />)} />
        <Route exact path="/add" element={handleAuthenticationUser(<NewPoll />)} />
        <Route exact path="/questions/:id" element={handleAuthenticationUser(<Dashboard />)} />
        <Route exact path="/404" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = ({ authedUser }) => ({
  logInState: !!authedUser
});

export default connect(mapStateToProps)(App);
