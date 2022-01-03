import DarkModeButton from './components/DarkModeButton';
import './App.css';
import Login from './components/Login';
import GithubList from './components/GithubList';

function App() {
  return (
    <>
      <header className="header">
        <DarkModeButton />
        <Login />
        <GithubList />
      </header>
    </>
  );
}

export default App;
