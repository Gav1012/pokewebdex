import logo from './logo.svg';
import './App.css';
import Dex from './components/Dex/Dex';
import Search from './components/Search/Search';

export default function App() {
  return (
    <div className="App">
      <Dex />
      <Search />
    </div>
  );
}
