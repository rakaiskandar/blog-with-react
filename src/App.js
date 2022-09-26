import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Home from './page/Home';
import Create from './page/Create';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
