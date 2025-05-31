import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AllApps from './pages/AllApps';
import Navbar from './Components/Navbar';
import Bootstrap from './pages/Bootstrap';
import Contact from './pages/Contact';
import TopicsCard from './pages/TopicsCard';
import PropPrograms from './pages/PropPrograms';
import SuperSetComponents from './Components/SuperSetComponents';
import StateSubscriptionPage from './pages/StateSubscriptionPage';
import UserEffectCounter from './Components/UserEffectCounter';
import EmployeeList from './Components/EmployeeList';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allapps/*" element={<AllApps />} />
                <Route path="/bootstrap" element={<Bootstrap />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/topiccards" element={<TopicsCard lession1='REACT JS SESSION' lession2='ANGULAR SESSION' />} />
                <Route path="/greetings" element={<PropPrograms />} />
                <Route path="/superSetComponents" element={<SuperSetComponents/>} />
                <Route path="/usestateprog" element={<StateSubscriptionPage />} />
                <Route path="/useEffectCnt" element={<UserEffectCounter />} />
                <Route path="/employeeList" element={<EmployeeList />} />

            </Routes>
        </>
    );
}
export default App;
