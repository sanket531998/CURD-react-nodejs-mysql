import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Read from "./Read";
import Delete from "./Delete";
import Edit from "./Edit";
// import "../node_modules/bootstrap/scss/bootstrap";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/read" element={<Read></Read>}></Route>
          <Route path="/delete/:uid?" element={<Delete></Delete>}></Route>
          <Route path="/edit/:id?" element={<Edit></Edit>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
