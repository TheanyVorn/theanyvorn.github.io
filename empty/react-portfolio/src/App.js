import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import '../../styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <main>
        <About />
        <Skills />
        <Education />
        {/* More sections will be added here */}
      </main>
    </div>
  );
}

export default App;
