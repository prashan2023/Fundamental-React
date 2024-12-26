import React from 'react';
import { FaBeerMugEmpty } from "react-icons/fa6";

const IconComponent = () => {
  return (
    <div>
      <h3>Icons Styles here.</h3>
      <FaBeerMugEmpty />
      <FaBeerMugEmpty size={30}/>
      <FaBeerMugEmpty size={30} color="gold"/>
    </div>
  )
}

export default IconComponent;
