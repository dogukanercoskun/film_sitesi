
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CustomNavbar from './components/navbar/CustomNavbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from "./components/MoviePage/MoviePage";
import AboutUs from "./components/aboutUs/AboutUs";

function App() {

  return (
    <>
     <Router>
    <CustomNavbar />
    <Routes>
      <Route path="/" element={<MoviePage />} />
      <Route path="/moviepage" element={<MoviePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  </Router>
    </>
  )
}

export default App
