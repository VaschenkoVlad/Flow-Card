import "../index.css";
import type { FirstType } from "../types/firstType";
import Card from "./card";
import { Link } from "react-router-dom";


const FirstPage = ({ cards }: { cards: FirstType[] }) => {
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
            list={card.list}
            buttonText={card.buttonName}
          />
        ))}
      </div>
    </main>
    </>
  );
};

export default FirstPage;