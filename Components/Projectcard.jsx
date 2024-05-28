import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import AddTodo from './AddTodo';
import ViewTodo from './ViewTodo';
import { getAllProjectAPI } from '../Service/allAPI';
import EditTitle from './EditTitle';


function ProjectCard() {
  const[allProject,setAllProject]=useState([])

  
  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };
    try {
      const result = await getAllProjectAPI(reqHeader);
      console.log(result);
      if (result.status === 200) {
        setAllProject(result.data);
      }
    }
    catch (err) {
      console.error("Error fetching comments:", err);
     
    }
  };
  


  return (
    <>
     <Container className='mt-2'>
      <Row>
        {allProject.map((project) => (
          <Col sm={12} md={6} lg={4} key={project._id} className='mb-3'>
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>
                  <h2>{project.title}</h2>
                  <span>
                    
                    <EditTitle project={project}/>
                  </span>
                </Card.Title>
                <div className="d-flex justify-content-between mt-4">
                 <div className="btn"> <AddTodo project={project}  /></div>
                 
                 <div className="btn"><ViewTodo project={project} /></div>  
                </div>
                <div className="div mt-2">Created date: {new Date(project.cdate).toLocaleDateString()}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
    
  );
}

export default ProjectCard;
