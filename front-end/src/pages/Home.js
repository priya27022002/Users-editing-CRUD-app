import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import  Axios  from 'axios';
 import { useNavigate } from 'react-router-dom';


 function Home({getId}) {
      const navigate=useNavigate()
  const[users,setUsers]=useState([])
  useEffect(()=>{Axios.get('http://localhost:9000/aliens')
  .then(res=> setUsers(res.data))

  })

  const deleteUser=(id)=>{
     Axios.delete(`http://localhost:9000/aliens/${id}`)
     .then(()=>alert("user deleted"))
     .catch((e)=>console.log(e))
  }

  const updateUser =(id)=>{
    getId(id)
    navigate('/updateForm')
  }
  return (
    <Container>
        <h1 className='display-3 text-center'>User List</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>SI.No</th>
          <th>Name</th>
          <th>Tech Stack</th>
          
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>{
            return(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.tech}</td>
                <td><button className='btn btn-primary' onClick={()=>updateUser(user._id)}>Update</button></td>
                <td><button className='btn btn-danger' onClick={()=>deleteUser(user._id)}>Delete</button></td>
                </tr>
            )
        })}
      </tbody>
    </Table>
    </Container>
  )
}

export default Home
