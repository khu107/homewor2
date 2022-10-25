import About from './About/About';
import './App.css';
import Content from './Content/Content';
import Most from './Most/Most';
import Navbar from './Navbar/Navbar';
import Opener from './Opener/Opener';
import What from './What/What';
import Who from './Who/Who';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Opener />
      <About />
      <Content />
      <Most />
      <Who />
      <What />
    </div>
  );
}

export default App;
