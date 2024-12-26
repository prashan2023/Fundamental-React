import React from 'react'
import Weather from './Component/Weather'
import UserStatus from './Component/UserStatus';
import Greeting from './Component/Greeting';
import Cart from './Component/Cart';

const App = () => {
  return (
    <div>
      <Weather/>
      <UserStatus loggedIn={false} Admin={true}/>
      <Greeting timeofDay = "afternoon"/> 
      <Cart />
    </div>
  )
}
export default App;
