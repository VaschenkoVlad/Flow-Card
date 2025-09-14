import "./card.css"
import type { CardProps } from "../types/cardProps"

const Card = ({title, buttonText, children}: CardProps) => {
     return (
    <>
        <div className="card">
            <div className="content">
                <div className="title">{title}</div>
                {}
            </div>
            <button>{buttonText}</button>
            {children}
        </div>
    </>
    );
};

export default Card;