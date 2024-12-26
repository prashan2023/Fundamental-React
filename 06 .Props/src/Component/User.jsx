import React from 'react'

const User = (props) => {
  return (
    <section>
      <img src={props.img} alt={props.name} width="200"/>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.isMarried}</h3>
      <h4>{props.hobbies}</h4>
    </section>
  )
}

export default User;
