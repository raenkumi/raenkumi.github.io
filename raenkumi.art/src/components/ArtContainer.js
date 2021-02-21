import { Link } from 'react-router-dom';

function ArtContainer() {
    return (
      <Link to="/project-mock">
        <div className="art-container">
          <h1>containermock</h1>
          <a href="https://photos.app.goo.gl/szi4Q64xtsNbqZxv8"></a>
        </div>
      </Link>
    );
  }
  
  export default ArtContainer;