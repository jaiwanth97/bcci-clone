import { Routes, Route } from "react-router-dom";
import FeaturedPlayers from "./Components/FeaturedPlayers";
import ImageSlider from "./Components/ImageSlider";
import Navbar from "./Components/NavBar";
import NewsSection from "./Components/NewsSection";
import UpcomingMatches from "./Components/UpcomingMatches";
import AllMatches from "./Components/AllMatches";
import Honours from "./Components/Honours";
import AboutUs from "./Components/AboutUs";
import Login from "./Components/LogIn";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import Rankings from "./Components/Rankings";
import Domestic from "./Components/Domestic";
import Player from "./Components/Player";
import AddPlayer from "./Components/AddPlayer"; // Import the AddPlayer component
import AddedPlayers from "./Components/AddedPlayers"; // Import the AddedPlayers component (you'll need to create this)

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* International Routes */}
        <Route path="/" element={
          <>
            <ImageSlider />
            <UpcomingMatches />
            <NewsSection />
            <FeaturedPlayers />
            <Honours />
            <Footer />
          </>
        } />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/all-matches" element={<AllMatches />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/players" element={<Player />} />
        <Route path="/player-add" element={<AddPlayer />} /> {/* Add player form */}
        <Route path="/added" element={<AddedPlayers />} /> {/* Added players list */}

        {/* Domestic Routes */}
        <Route path="/domestic" element={<Domestic />} />
        
        {/* Individual Player Route - to potentially display a specific player directly */}
        <Route path="/player/:playerId" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;