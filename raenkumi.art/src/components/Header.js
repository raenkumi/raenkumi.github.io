import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header() {
    return (
      <div className="header">
        <header>
            <Link to="/"><h2 id="title">raenkumi</h2></Link>
            <Link to="/reel"><h2>reel</h2></Link>
            <Link to="/about"><h2>about</h2></Link>
        </header>
      </div>
    );
  }
  
  export default Header;