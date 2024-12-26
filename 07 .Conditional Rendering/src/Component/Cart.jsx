import React from 'react'

const Cart = () => {
   const items = ["wireless Earbuds", "Power Bank", "New SSD","Hoddie"];
   return (
    <div>
      <h1>Cart 🛒</h1>
      <h2>You have {items.length} numbers of products.</h2>
      <h4>Products</h4>
      {items.map((item) => (
        <li key={Math.random()}>{item}</li>
      ))}
    </div>
  )
}

export default Cart;
