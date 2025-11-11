import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Book from "./components/Book";
import Footer from "./components/Footer";
import Popup from "./components/LoginPopup";
import LoginPage from "./components/LoginPage";
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginSuccess = () => {
    setIsPopupOpen(false);
    navigate("/loginpage");
  };

  // Hide Navbar on login page
  const hideNavbar = location.pathname === "/loginpage";

  return (
    <div>
      {/* Navbar & popup visible only if NOT on loginpage */}
      {!hideNavbar && (
        <>
          <Navbar onLoginClick={() => setIsPopupOpen(true)} />
          <Popup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Slider />
              <Services />
              <AboutUs />
              <Book />
              <Footer />
            </>
          }
        />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
