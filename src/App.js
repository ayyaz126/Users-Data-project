import React, { useState } from 'react';
import AddUser from './components/AddUser';
import ShowUser from './components/ShowUser';
import usersData from './components/Api';

function App() {
  //hook for handling the userData api
  const [users,setUsers] = useState(usersData);

  //fuction for increment the user ID
  const addUser = (user) =>{
       user.id = users.length + 1;
      // updating in the Api
     setUsers([...users,user]); 
  }
 // function for deleting the data
 const deleteUser = (id) =>{
    setUsers(users.filter((used) => used.id !==id ));
 }
     
  return (
    <div className='container'>
      <div className='row' >
         <div className='col-md-6' >
          < AddUser addUser = {addUser} />
         </div>
         <div className='col-md-6' >
           < ShowUser used = {users} deleteUser={deleteUser}   />
         </div>
      </div>
    </div>
  )
}

export default App;
