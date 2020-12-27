import React, { Suspense, lazy, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { UserContext } from './UserContext';

import NavBar from './js/components/Navbar/Navbar';
import Footer from './js/components/Footer/Footer';
import NotFound from './js/components/NotFound/NotFound';


const Home = lazy(() => import('./js/views/Home/Home'));
const LoggedHome = lazy(() => import('./js/views/LoggedHome/LoggedHome'));
const Login = lazy(() => import('./js/views/Login/Login'));
const Register = lazy(() => import('./js/views/Register/Register'));
const Wallet = lazy(() => import('./js/views/Wallet/Wallet'));


const Rasp = lazy(() => import('./js/views/Rasp/Rasp'));

function App() {

  const [homeUrl] = useState('https://iwash-react.herokuapp.com/');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [backen_url] = useState('https://iwash-backend.herokuapp.com/');
  
  const [user, setUser] = useState(null);
  const [Auth, setAuth] = useState(null);
  let tokenAuth = localStorage.getItem('token');
  let userId = localStorage.getItem('userID');
  let userEmail = localStorage.getItem('email');

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])  

  const providerValue = useMemo(() => ({ 
    user, 
    setUser, 
    Auth, 
    setAuth, 
    backen_url, 
    windowHeight, 
    homeUrl 
  }), [
    user, 
    setUser, 
    Auth, 
    setAuth, 
    backen_url, 
    windowHeight, 
    homeUrl
  ]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar/>
          <section style={{minHeight: windowHeight}}>
            <Switch>
              {!tokenAuth ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={LoggedHome}/> }
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/wallet" component={Wallet} />
              <Route render={() => <NotFound/>} />
            </Switch>
            </section>
          <Footer/>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
