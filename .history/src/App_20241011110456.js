import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='flex'>
        <CardComponent title={"card 1"}/>
        <CardComponent title={"card 2"}/>
        <CardComponent title={"card 3"}/>
        <CardComponent title={"card 4"}/>
        <CardComponent title={"card 5"}/>
      </div>
      </div>
  );
}

export default App;
