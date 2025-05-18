import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import Navbar from './Components/Navbar';
import Bootstrap from './pages/Bootstrap';
import Contact from './pages/Contact';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allapps" element={<AllApps />} />
                <Route path="/bootstrap" element={<Bootstrap />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}
export default App;
