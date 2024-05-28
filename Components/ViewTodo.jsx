// import React,{useState} from 'react'
// import { Modal,Button,Form } from 'react-bootstrap'

// function ViewTodo() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => {
   
//     setShow(true);
// };




//   return (
//    <>
//           <div className="Addcontent mt-3 d-flex justify-content-center">
//                 <button onClick={handleShow} style={{ width: '120px', borderRadius: '10px', height: '50px', border: 'none', backgroundColor: '#b8b8ff' }}>View Todo<i class="fa-solid fa-eye ms-2"></i></button>
//             </div>

//             <Modal show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 size="lg"
//                 >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Todo Details</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
                    
//                     <table class="table">
//                           <thead>
//                             <tr>
//                               <th>#</th>
//                               <th>Title</th>
//                               <th>Description</th>
//                               <th>Status</th>
//                               <th>...</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td>1</td>
//                               <td>todo1</td>
//                               <td>Lorem ipsum dolor dolore libero tempora, saepe  alias ea!</td>
//                               <td><Form>
//                                  <Form.Select aria-label="Default select example" className='mb-3' 
//                            >
                           
//                             <option value="completed">Completed</option>
//                             <option value="pending">Pending</option>
                           
//                         </Form.Select>
//                                   </Form></td>
//                               <td><div className="d-flex justify-content-between">
//                                 <div className="editDiv"><i class="fa-regular fa-pen-to-square text-primary"></i></div>
//                                 <div className="deleteDiv"><i class="fa-solid fa-trash text-danger"></i></div>
//                                  </div></td>
//                             </tr>
//                           </tbody>
//                     </table>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" >
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//    </>
//   )
// }

// export default ViewTodo

// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { getTodoAPI } from '../Service/allAPI';

// function ViewTodo({ project}) {
//   const [show, setShow] = useState(false);
//   const [todos, setTodos] = useState([]);

//   const handleClose = () => setShow(false);
//   const handleShow = async () => {
//     await fetchTodos();
//     setShow(true);
//   };

//   const fetchTodos = async () => {
//     const token = sessionStorage.getItem("token");
//     const reqHeader = {
//       "Authorization": `Bearer ${token}`
//     };
//     try {
//       const result = await getTodoAPI(project._id, reqHeader);
//       console.log(result);
//       if (result.status === 200) {
//         setTodos(result.data);
//       }
//     } catch (err) {
//       console.error("Error fetching todos:", err);
//     }
//   };

//   return (
//     <>
//       <div className="Addcontent mt-3 d-flex justify-content-center">
//         <button onClick={handleShow} style={{ width: '120px', borderRadius: '10px', height: '50px', border: 'none', backgroundColor: '#b8b8ff' }}>
//           View Todo<i className="fa-solid fa-eye ms-2"></i>
//         </button>
//       </div>

//       <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Todo Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Status</th>
//                 <th>...</th>
//               </tr>
//             </thead>
//             <tbody>
//               {todos.map((todo, index) => (
//                 <tr key={todo._id}>
//                   <td>{index + 1}</td>
//                   <td>{todo.todoa}</td>
                 
//                   <td>{todo.desa}</td>
//                   <td>
//                     <Form>
//                       <Form.Select aria-label="Default select example" className='mb-3' defaultValue={todo.sta}>
//                         <option value="completed">Completed</option>
//                         <option value="pending">Pending</option>
//                       </Form.Select>
//                     </Form>
//                   </td>
//                   <td>
//                     <div className="d-flex justify-content-between">
//                       <div className="editDiv">
//                         <i className="fa-regular fa-pen-to-square text-primary"></i>
//                       </div>
//                       <div className="deleteDiv">
//                         <i className="fa-solid fa-trash text-danger"></i>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//                 // 
                
//               ))}
//             </tbody>
//           </table>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary">
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default ViewTodo;

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { getTodoAPI, removeTodoAPI} from '../Service/allAPI';


function ViewTodo({ project }) {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    await fetchTodos();
    setShow(true);
  };

  const fetchTodos = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };

    try {
      const result = await getTodoAPI(project._id, reqHeader);
      console.log(result);
      if (result.status === 200) {
        const data = result.data[0]; // Assuming result.data is an array with a single object

        const todoItems = [
          { id: 'todoa', title: data.todoa, description: data.desa, status: data.sta },
          { id: 'todob', title: data.todob, description: data.desb, status: data.stb },
          { id: 'todoc', title: data.todoc, description: data.desc, status: data.stc },
          { id: 'todod', title: data.todod, description: data.desd, status: data.std }
        ];

        setTodos(todoItems);
      }
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };
//   const handleDeleteTodo = async (projectId, todoId) => {
//     const token = sessionStorage.getItem("token");
//     if (token) {
//         const reqHeader = {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//         };

//         // API call
//         const result = await removeTodoAPI(projectId, todoId, reqHeader);
//         if (result.status === 200) {
//             fetchTodos();
//         } else {
//             console.log(result);
//         }
//     } else {
//         console.log("No token found");
//     }
// };
const handleDeleteTodo = async (projectId, todoId) => {
  const token = sessionStorage.getItem("token");
  if (token) {
      const reqHeader = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
      };

      // API call
      const result = await removeTodoAPI(projectId, todoId, reqHeader);
      if (result.status === 200) {
          fetchTodos();
      } else {
          console.log(result);
      }
  } else {
      console.log("No token found");
  }
};

  return (
    <>
      <div className="Addcontent mt-3 d-flex justify-content-center">
        <button onClick={handleShow} style={{ width: '120px', borderRadius: '10px', height: '50px', border: 'none', backgroundColor: '#b8b8ff' }}>
          View Todo<i className="fa-solid fa-eye ms-2"></i>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Todo Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>
                    <Form.Select aria-label="Default select example" className='mb-3' defaultValue={todo.status}>
                      <option value="completed">Completed</option>
                      <option value="pending">Pending</option>
                    </Form.Select>
                  </td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <button className="editDiv btn" >
                        <i className="fa-regular fa-pen-to-square text-primary"></i>
                      </button>
                      <button onClick={()=>handleDeleteTodo(project?._id)}  className="deleteDiv btn" >
                        <i className="fa-solid fa-trash text-danger"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewTodo;
