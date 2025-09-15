import "../index.css";
import type { ThirdType } from "../types/thirdType";
import Card from "./card";
import { Link } from "react-router-dom";

const ThirdPage = ({ cards }: { cards: ThirdType[] }) => {
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
      <main>
      <div className="cards-row">
        {cards.map(card => (
          <Card
          key={card.id}
          title={card.title}
          buttonText={card.buttonName}
        >
          <div className="price">${card.price}</div>
          <p className="description">{card.description}</p>
        </Card>
        ))}
      </div>
    </main>
    </>
  );
};

export default ThirdPage; 

