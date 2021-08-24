import { Route, Switch } from 'react-router-dom';

import DarkModeButton from './components/DarkModeButton';
import GithubList from './components/GithubList';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div>
      <header>
        <DarkModeButton />
      </header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={GithubList} />
      </Switch>
    </div>
  );
}

export default App;
