 import React from 'react'
 
 const UserStatus = (props) => {
     if(props.loggedIn && props.Admin){
        return <h3>Welcome Admin!</h3>
     }return <h3>Welcome User!</h3>
 }
 
 export default UserStatus;
 