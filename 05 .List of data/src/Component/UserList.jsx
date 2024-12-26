import React from 'react'

const UserList = () => {
  
  const Users = [
    { id : 1, name : "Alice" , age : 25},
    { id : 2, name : "Bob" , age : 30},
    { id : 3, name : "Charlie" , age : 22}
  ];
 
  return (
    <div>
      {Users.map((user) => (
        <ul key = {user.id}>
            <li>User Name : {user.name}</li>
            <li>User Age : {user.age}</li>
        </ul>
      ))}
    </div>
  )
}

export default UserList;
