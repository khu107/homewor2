import About from './About/About';
import './App.css';
import Content from './Content/Content';
import Navbar from './Navbar/Navbar';
import Opener from './Opener/Opener';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Opener />
      <About />
      <Content />
    </div>
  );
}

export default App;
