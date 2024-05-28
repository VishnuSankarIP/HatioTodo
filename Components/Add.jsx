import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addProjectAPI } from '../Service/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add() {

    const [lgShow, setLgShow] = useState(false);
    const [ProjectDetails,setProjectDetails]=useState({title:'',cdate:''});
    console.log(ProjectDetails);

    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);

// const handleShow = () => setLgShow(true);
    const handleClose = () => {
        setLgShow(false);
        setProjectDetails({ title: '',cdate:'' });
    };

    const handleDateChange = (date) => {
        // Format the date as needed (e.g., to a string)
        const formattedDate = date.toISOString(); // Example: "2024-05-22T10:00:00.000Z"
        setProjectDetails({ ...ProjectDetails, cdate: formattedDate });
        setStartDate(date);
    };

    const handleAddProject=async()=>{
        const {title,cdate}=ProjectDetails
        if (!title || !cdate ) {
            toast.warning("Please fill out all fields.");
          } else {
            const reqBody = {
              title,
              cdate,
            
            };
        
            const token = sessionStorage.getItem("token");
            if (token) {
                const reqHeader = {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                };
                try {
                    const result = await addProjectAPI(reqBody, reqHeader);
                    console.log(result);
                    if (result.status === 200) {
                      toast.success(`project add successfully.`);
                      handleClose()
                      setProjectDetails({
                        title: "",
                        cdate: "",
                        
                      });
                    }
                     else {
                      alert(result.response.data);
                    }
                  } catch (err) {
                    console.log(err);
                  }
                }


     
            }
    };

    return (
        <>
            <div className="Addcontent mt-3 d-flex justify-content-center">
                <button onClick={setLgShow} style={{ width: '150px', borderRadius: '10px', height: '50px', border: 'none', backgroundColor: '#b8b8ff' }}>Add<i class="fa-solid fa-plus ms-2"></i></button>
            </div>

            <Modal
                size="lg"
                show={lgShow}
                backdrop="static"
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add Project
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                            <Form.Control value={ProjectDetails.title} onChange={(e)=>setProjectDetails({...ProjectDetails,title:e.target.value})} type="text" placeholder="Project title" />
                        </Form.Group>
                        <DatePicker selected={startDate} onChange={handleDateChange} />
                    
                    </Form>

                    <div className="Addcontent mt-3 d-flex justify-content-center">
                <button onClick={handleAddProject} style={{ width: '150px', borderRadius: '10px', height: '50px', border: 'none', backgroundColor: '#b8b8ff' }}>Add Project</button>
            </div>
                </Modal.Body>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={3000} />

        </>
    )
}

export default Add