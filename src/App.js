import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase/firebase_config';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ScrollToTop from './Pages/Shared/ScrollToTop/ScrollToTop';
import WatchCollection from './Pages/WatchCollection/WatchCollection';
import LogIn from './Pages/Login/LogIn/LogIn';
import AuthProvider from './Contexts/AuthProvider';
import SignUp from './Pages/Login/SignUp/SignUp';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';

initializeApp(firebaseConfig);

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Header />

        <Switch>
          <Route path='/' exact >
            <Home></Home>
          </Route>
          <Route path='/watch-collection' exact >
            <WatchCollection></WatchCollection>
          </Route>

          <PrivateRoute path='/dashboard' exact>
            <Dashboard></Dashboard>
          </PrivateRoute>

          <Route path='/login' exact >
            <LogIn></LogIn>
          </Route>
          <Route path='/signup' exact >
            <SignUp></SignUp>
          </Route>

          <Route path="/*" exact >
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>
    </AuthProvider>
  );
}

export default App;
