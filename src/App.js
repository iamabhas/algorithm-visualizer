import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Error } from "./Pages/Error";
import { Sort } from "./Sorting/Sort";
import { Nqueen } from "./Nqueen/Nqueen";
import { Bsearch } from "./BinarySearch/Bsearch";
import { Bogo } from "./Sorting/Bogo";
import "./index.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sort" element={<Sort />}></Route>
        <Route path="/bsearch" element={<Bsearch />}></Route>
        <Route path="/nqueen" element={<Nqueen />}></Route>
        <Route path="/bogo" element={<Bogo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
