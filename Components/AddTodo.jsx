import React, { useState } from 'react'
import { Dropdown, DropdownButton, Form, Modal } from 'react-bootstrap';
import { addTodosAPI } from '../Service/allAPI';

function AddTodo({project}) {
    const [lgShow, setLgShow] = useState(false);
    const [todoDetails,setTodoDetails]=useState([{todoa:'',desa:'',sta:'',todob:'',desb:'',stb:'',todoc:'',desc:'',stc:'',todod:'',desd:'',std:''}])
    console.log(todoDetails);
    console.log(project);

    const handleClose = () => {
        setLgShow(false);
        setTodoDetails({todoa:'',desa:'',sta:'',todob:'',desb:'',stb:'',todoc:'',desc:'',stc:'',todod:'',desd:'',std:'' });
    };

    const handleSubmit = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        };

        try {
            const response = await addTodosAPI(project._id, todoDetails, reqHeader);
            if (response.status === 200) {
                console.log("Todo added successfully:", response.data);
                alert("Todo add successfully")
                handleClose();
            } else {
                console.error("Failed to add todo:", response);
            }
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };
    return (
        <>
            <div className="Addcontent mt-3 d-flex justify-content-center">
                <button onClick={setLgShow} style={{ width: '120px', borderRadius: '10px', height: '50px', border: 'none', backgroundColor: '#b8b8ff' }}>Add Todo<i class="fa-solid fa-plus ms-2"></i></button>
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
                        Add Todo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control value={todoDetails.todoa} onChange={(e)=>setTodoDetails({...todoDetails,todoa:e.target.value})} type="text" placeholder="Todo1"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control value={todoDetails.desa} onChange={(e)=>setTodoDetails({...todoDetails,desa:e.target.value})} as="textarea" rows={3} placeholder='Description' />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className='mb-3' value={todoDetails.sta}
                            onChange={(e) => setTodoDetails({ ...todoDetails, sta: e.target.value })}>

                            <option>Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                           
                        </Form.Select>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Control value={todoDetails.todob} onChange={(e)=>setTodoDetails({...todoDetails,todob:e.target.value})} type="text" placeholder="Todo2" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control value={todoDetails.desb} onChange={(e)=>setTodoDetails({...todoDetails,desb:e.target.value})} as="textarea" rows={3} placeholder='Description' />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className='mb-3' value={todoDetails.stb}
                            onChange={(e) => setTodoDetails({ ...todoDetails, stb: e.target.value })}>
                            <option>Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                           
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Control value={todoDetails.todoc} onChange={(e)=>setTodoDetails({...todoDetails,todoc:e.target.value})} type="text" placeholder="Todo3" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control value={todoDetails.desc} onChange={(e)=>setTodoDetails({...todoDetails,desc:e.target.value})} as="textarea" rows={3} placeholder='Description' />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className='mb-3' value={todoDetails.stc}
                            onChange={(e) => setTodoDetails({ ...todoDetails, stc: e.target.value })}>
                            <option>Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                           
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                            <Form.Control value={todoDetails.todod} onChange={(e)=>setTodoDetails({...todoDetails,todod:e.target.value})} type="text" placeholder="Todo4" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control value={todoDetails.desd} onChange={(e)=>setTodoDetails({...todoDetails,desd:e.target.value})} as="textarea" rows={3} placeholder='Description' />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className='mb-3' value={todoDetails.std}
                            onChange={(e) => setTodoDetails({ ...todoDetails, std: e.target.value })}>
                            <option>Status</option>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                           
                        </Form.Select>
                    </Form>

                    <div className="Addcontent mt-3 d-flex justify-content-center">
                        <button onClick={handleSubmit} style={{ width: '150px', borderRadius: '10px', height: '50px', border: 'none', backgroundColor: '#b8b8ff' }}>Add Todo</button>
                    </div>
                </Modal.Body>
               
            </Modal>
          


        </>
    )
}

export default AddTodo