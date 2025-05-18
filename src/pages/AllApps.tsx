import React, { ReactNode } from 'react';
import SideNavigation from '../Components/SideNavigation'



const AllApps : React.FC = () => {
  return (
    <SideNavigation>
      <h1>Welcome to My Page</h1>
      <p>This is the content section.</p>
    </SideNavigation>
  );
};

export default AllApps;