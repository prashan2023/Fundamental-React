import React from 'react'

const Greeting = () => {
  const name = "Prashan";
  const date = new Date();
  
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Current date:{date.getDate()}</p>
    </div>
  )
}

export default Greeting;
