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
import Chats from './Chats.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/chat' element={[<Header backButton={"/"} />, <h1>Chat is here!</h1>,<Chats />]} />
          <Route path='/' element={[<Header />, <TinderCards />, <SwipeButtons />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
