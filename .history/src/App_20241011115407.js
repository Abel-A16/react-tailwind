import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardComponent from './components/CardComponent';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='flex flex-wrap '>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 1"} imageUrl={"/card.jpg"}/>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 2"} imageUrl={"/card.jpg"}/>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 3"} imageUrl={"/card.jpg"}/>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 4"} imageUrl={"/card.jpg"}/>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 5"} imageUrl={"/card.jpg"}/>
      </div>
        <Form/>
      </div>
  );
}

export default App;
