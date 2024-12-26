import React from 'react';
import { FaComputer } from "react-icons/fa6";
import StyledCard from './Component/StyledCard';
import ProfileCard from './Component/ProfileCard';
import IconComponent from './Component/IconComponent';

const App = () => {
  return (
    <div>
      <StyledCard/>
      <ProfileCard/>
      <IconComponent/>
    </div>
  )
}

export default App;
