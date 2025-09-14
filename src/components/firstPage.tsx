import "../index.css"
import { FirstType } from "../types/firstType"

const FirstPage = (props: FirstType) => {
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
    </>
    );
};

export default 