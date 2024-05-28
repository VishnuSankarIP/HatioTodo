import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Add from '../../Components/Add'

import {  useNavigate } from 'react-router-dom'
import ProjectCard from '../../Components/Projectcard'
function Dashboard() {
 const navigate=useNavigate()
  const handleLogout=()=>{
    sessionStorage.clear()
    setTimeout(() => {
      navigate('/')
    }, 2000)
    toast.error("Logout Successfully")
    
  }
  return (
    <>
    <Navbar expand="lg" style={{backgroundColor:'#b8b8ff'}} >
      <Container>
        <Navbar.Brand href="#home">Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Button className='btn btn-secondary rounded' onClick={handleLogout}>Signout</Button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Add/>

    <ProjectCard  />

    

    </>
  )
}

export default Dashboard