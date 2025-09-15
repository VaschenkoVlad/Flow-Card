import "./card.css"
import type { CardProps } from "../types/cardProps"


const Card = ({ title, buttonText, list, children }: CardProps) => {
    return (
        <div className="card">
            <div className="content">
                <div className="title">{title}</div>
                                {list && (
                                    <ul>
                                        {list.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
            </div>
            <button>{buttonText}</button>
            {children}
        </div>
    );
};

export default Card;