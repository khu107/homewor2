import About from './About/About';
import './App.css';
import Navbar from './Navbar/Navbar';
import Opener from './Opener/Opener';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Opener />
      <About />
    </div>
  );
}

export default App;
