import { Route, Routes } from "react-router-dom";

import { Footer, NavBar } from "./components";
import {
  About,
  ComingSoon,
  Contact,
  Home,
  NotFound,
  WhitePaper,
} from "./routes";

function App() {
  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whitePaper" element={<WhitePaper />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
