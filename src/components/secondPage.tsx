import "../index.css";
import type { SecondType } from "../types/secondType";
import Card from "./card";

const SecondPage = ({ cards }: { cards: SecondType[] }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#">HOME PAGE</a></li>
            <li><a href="#">FIRST PAGE</a></li>
            <li><a href="#">SECOND PAGE</a></li>
            <li><a href="#">THIRD PAGE</a></li>
          </ul>
        </nav>
      </header>
      <main>
      <div className="cards-row">
        {cards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            img={card.img}
            buttonText={card.buttonName}
          />
        ))}
      </div>
    </main>
    </>
  );
};

export default SecondPage;