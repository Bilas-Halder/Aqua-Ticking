import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import WatchCollection from './Pages/WatchCollection/WatchCollection';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/' exact >
          <Home></Home>
        </Route>
        <Route path='/watch-collection' exact >
          <WatchCollection></WatchCollection>
        </Route>

        <Route path="/*" exact >
          <NotFound></NotFound>
        </Route>
      </Switch>

      <Footer></Footer>

    </Router>
  );
}

export default App;
