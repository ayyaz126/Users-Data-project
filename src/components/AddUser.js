import React, { useState } from 'react'


function AddUser(props){
    //making the object fir clearing out the input fields after saving the dat
    const initalValues = {
      id: null,
      name: '',
      username: '',
      Email: '',   
    }

  //hook for getting the data from the all input fields
  const [user, setUser] = useState (initalValues) ;
   //function that gets the data from the input fields and pass the data to the hook
   const handleInput = (event) =>{
      const {name , value} = event.target;
      setUser({...user,[name]: value  }) 
   }
  return (
    <div className='container'>
        
              <form onSubmit={(event) => {
                 event.preventDefault()
                 props.addUser(user)
                 setUser(initalValues)
              }}>
               
                  <h1  className='text-center display-3'  > Add Users List  </h1>
                <div className='form-group'>
                   <label> Name:</label>
                   <input type = "text" value={user.name}   onChange={handleInput}   name= "name" className='form-control'/>  
                </div>
               
                <div className='form-group'>
                   <label> Username:</label>
                   <input type = "text" value={user.username}  onChange={handleInput} name= "username" className='form-control'/>  
                </div>
                <div className='form-group'>
                   <label> Email:</label>
                   <input type = "text" value={user.Email}   onChange={handleInput}   name= "Email" className='form-control'/>  
                </div>
                <div className='form-group'>
                  <button className='btn btn-primary'> Save Data </button>
                </div>
              </form>
    </div> 
  )
}

export default AddUser