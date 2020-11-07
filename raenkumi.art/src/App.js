import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Reel from './pages/Reel';
import ProjectMock from './pages/projects/ProjectMock';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Route exact path ="/" component={Home}/>
          <Route path="/reel" component={Reel}/>
          <Route path="/about" component={About}/>
          <Route path="/project-mock" component={ProjectMock}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
