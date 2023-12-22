import React from 'react'

function ShowUser(props) {
  return (
    <div className='container'>
         <h1 className='text-center display-3 '> Show of All User </h1> 
         <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th  > Delete </th>
    </tr>
  </thead>
    {
      props.used.map((newuser) =>(
         <tr>
           <td>{newuser.id}</td>
           <td> {newuser.name}</td>
           <td> {newuser.username} </td>
           <td> {newuser.Email} </td>
           <td> <a onClick={() => props.deleteUser (newuser.id)}   className=' btn btn-outline-danger' > Delete </a> </td>
         </tr>
      ))
    }
    
</table>
    </div>
  )
}

export default ShowUser