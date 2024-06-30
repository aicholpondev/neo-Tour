import './App.css';
import Home from"./pages/Home/Home";
import Details from "./pages/Details/details";
import {Route,Routes} from "react-router";

function App() {
  return (
      <div className="App">



          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/:id" element={<Details/>}/>
          </Routes>
      </div>
  );
}

export default App;
