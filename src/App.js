import About from './About/About';
import './App.css';
import Content from './Content/Content';
import Most from './Most/Most';
import Navbar from './Navbar/Navbar';
import Opener from './Opener/Opener';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Opener />
      <About />
      <Content />
      <Most />
    </div>
  );
}

export default App;
