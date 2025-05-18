import React, { ReactNode } from 'react';
import { Routes, Route } from "react-router-dom";
import SideNavigation from '../Components/SideNavigation';
import Bootstrap from './Bootstrap';
import UseStateProg from './UseStateProg';
import PropPrograms from './PropPrograms';
import Operators from './Operators';



const AllApps : React.FC = () => {
  return (
    <SideNavigation>
      <Routes>
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/usestateprog" element={<UseStateProg />} />
        <Route path="/propprograms" element={<PropPrograms />} />
        <Route path="/operators" element={<Operators />} />
        {/* Add a default route if needed */}
      </Routes>
    </SideNavigation>
  );
};

export default AllApps;