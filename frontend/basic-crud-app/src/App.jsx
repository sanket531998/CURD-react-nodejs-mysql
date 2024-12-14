import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
// import "../node_modules/bootstrap/scss/bootstrap";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
