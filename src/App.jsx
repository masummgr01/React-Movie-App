
import './css/App.css'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import {Routes, Route} from "react-router-dom";
import {MovieProvider} from "./contexts/MovieContext.jsx";
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <MovieProvider>
      <div>
        <Navbar />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;