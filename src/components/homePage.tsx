import "../index.css";
import Card from "./card";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
          <li><Link to="/">HOME PAGE</Link></li>
          <li><Link to="/first">FIRST PAGE</Link></li>
          <li><Link to="/second">SECOND PAGE</Link></li>
          <li><Link to="/third">THIRD PAGE</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HomePage;