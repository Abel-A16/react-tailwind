import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CardComponent from './components/CardComponent';
import Form from './components/Form';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='flex flex '>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 1"} imageUrl={"/card.jpg"}/>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 2"} imageUrl={"/card.jpg"}/>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 3"} imageUrl={"/card.jpg"}/>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 4"} imageUrl={"/card.jpg"}/>
        <CardComponent description={"This card provides an overview of the product/service, highlighting key features and benefits in a compact format. "} title={"CARD 5"} imageUrl={"/card.jpg"}/>
      </div>
        <Form/>
        <Gallery/>
      </div>
  );
}

export default App;
