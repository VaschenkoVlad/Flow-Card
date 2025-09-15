import FirstPage from './components/firstPage';
import firstArray from './fixtures/firstArray.json';
import SecondPage from './components/secondPage';
import secondArray from './fixtures/secondArray.json';
import ThirdPage from './components/thirdPage';
import thirdArray from './fixtures/thirdArray.json';
import HomePage from './components/homePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/first" element={<FirstPage cards={firstArray.slice(0, 4)} />} />
        <Route path="/second" element={<SecondPage cards={secondArray.slice(0, 3)} />} />
        <Route path="/third" element={<ThirdPage cards={thirdArray.slice(0, 5)} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
