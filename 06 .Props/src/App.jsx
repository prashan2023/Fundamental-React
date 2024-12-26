import React from 'react'
import Product from './Component/Product'
import Person from './Component/Person'
import User from './Component/User'

const App = () => {
  return (
    <div>
      <Person name= "Prashan" age= {26} />
      <Product name= "Laptop" price= {30000}/>
      <User
         img= "https://avatars.githubusercontent.com/u/150582779?v=4"
         name= "Prashan"
         age= {26}
         isMarried={false}
         hobbies= {["coding "," reading "," sleeping"]}
      />        
    </div>
  )
}

export default App;
