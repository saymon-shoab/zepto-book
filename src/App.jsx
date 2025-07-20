import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Books from "./page/Books";
import WishList from "./page/WishList";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
