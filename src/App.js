import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="nav">
          <Link to="/document1">document 1</Link>
          <Link to="/document2">document 2</Link>
      </nav>
        <Outlet />
    </div>
  );
}

export default App;
