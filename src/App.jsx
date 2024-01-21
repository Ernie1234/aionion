import { Route, Routes } from "react-router-dom";

import { Footer, NavBar } from "./components";
import { About, Home, NotFound } from "./routes";

function App() {
  return (
    <div className="relative bg-gray-200">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
