import './App.css';
import "./index.css";
import Header from "./Header.js"
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/chat' element={<h1>Chat is here!</h1>} />
          <Route path='/' element={[<TinderCards />, <SwipeButtons />, <filipGomb />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
