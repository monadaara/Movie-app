import Home from "./components/Home";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Search from "./components/Search";
import FilteredMovies from "./components/FilteredMovies";
import NavBar from "./components/NavBar";
import Input from "./components/Input";
import MovieDetail from "./components/MovieDetail";
import Tv from "./components/Tv";
import TvSearch from "./components/tvSearch";
import FilteredTvs from "./components/FilteredTvs";
import ShowDetail from "./components/showDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-container">
          <NavBar />

          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/movies/:type" element={<FilteredMovies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/tv-search/:search" element={<TvSearch />} />
            <Route path="/tvs/:type" element={<FilteredTvs />} />
            <Route path="/tv/:id" element={<ShowDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
