import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';


function CreateUser() {
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [tech,setTech]=useState("")
    
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(name+" "+tech)
        Axios.post('http://localhost:9000/aliens',{name:name,tech:tech})
        .then(()=>alert("User Created"))
        .catch(e=>console.log(e))
        setName("")
        setTech("")
        navigate('/')
        

    }
  return (
    <Container>
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} value={name}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Tech</Form.Label>
        <Form.Control type="text" placeholder="Enter your tech stack" onChange={(e)=>setTech(e.target.value)} value={tech} />
      </Form.Group>

      
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></Container>
  )
}

export default CreateUser
