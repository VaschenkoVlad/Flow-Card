import "../index.css";
import type { SecondType } from "../types/secondType";
import Card from "./card";
import { Link } from "react-router-dom";

const SecondPage = ({ cards }: { cards: SecondType[] }) => {
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
         <img src={card.img} alt={card.title} />
       </Card>
        ))}
      </div>
    </main>
    </>
  );
};

export default SecondPage;