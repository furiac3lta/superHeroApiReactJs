import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import HeroFind from "./components/HeroFind";
import Layout from './components/Layout'
import Home from './pages/Home';

function App() {

  return (
    <>

      <Router>
        <Layout>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/HeroFind:id/:name" component={HeroFind}/>
        </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
