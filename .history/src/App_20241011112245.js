import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardComponent from './components/CardComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='flex flex-wrap '>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. It's designed to be visually appealing and informative, with a focus on clarity and usability. Perfect for displaying concise summaries that encourage user engagement."}/>
      </div>
      </div>
  );
}

export default App;
