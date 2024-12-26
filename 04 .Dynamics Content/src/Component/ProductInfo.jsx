import React from 'react'

const ProductInfo = () => {
  const name = "Laptop";
  const price = 1200;
  const availability = "In stock";
  
  return (
    <div>
      <h1> name : {name}</h1>
      <h1> price : ${price}</h1>
      <h1> availability :{availability}</h1>
    </div>
  )
}

export default ProductInfo;
