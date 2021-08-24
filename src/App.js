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
        <Route path="/" component={GithubList} />
        <Route path="login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
