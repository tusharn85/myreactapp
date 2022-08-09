import './App.css';
import NewsApp from './components/NewsApp';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><a href='https://www.msn.com/en-in/news/' target="_blank" rel="noreferrer">More News</a></li>
              <li className='align-right'><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
        </header>
        <NewsApp />
        <Routes>
          <Route path='/login' component={<Login />}>
            <Login />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Login() {
  return (
  <div>
    <header>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='https://www.msn.com/en-in/news/' target="_blank" rel="noreferrer">More News</a></li>
          <li><a href='/Login'>Login</a></li>
        </ul>
      </nav>
    </header>
  </div>
  );
}