import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CardComponent title={"card 1"}/>
    </div>
  );
}

export default App;
