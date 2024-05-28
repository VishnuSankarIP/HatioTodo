// import React, { useState } from 'react'
// import { Button, Modal } from 'react-bootstrap'
// import { editTitleAPI } from '../Service/allAPI';

// function EditTitle({project}) {
//     const [projectData,setProjectData]=useState({ id: project?._id,
//         title: project?.title})
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const handleChange = (e, field) => {
//         setProjectData({ ...projectData, [field]: e.target.value });
//     };

//     const handleUpdateProject = async () => {
//         const { title } = projectData;
//         if (!title) {
//             alert("Please fill the form");
//         } else {
//             const token = sessionStorage.getItem("token");
//             if (token) {
//                 const reqHeader = {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 }
//                 try {
//                     const result = await editTitleAPI(projectData.id, projectData, reqHeader);
//                     console.log(result);
                    
//                     if (result.status === 200) {
//                         handleClose();
//                         // setEditResponse(result)

//                     } 
//                     else {
//                         console.log(result.response);
//                     }
//                 } catch (err) {
//                     console.log(err);
//                 }
//             }
//         }
//     };
//   return (
//    <>
//    <div className="Addcontent ">
//         <div className="btn" onClick={handleShow}><i className="fa-regular fa-pen-to-square"></i></div>
//      </div>
//      <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Edit Details</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <input value={projectData.title} onChange={(e) => handleChange(e, 'title')} type='text' className='form-control mb-2' placeholder='Project Title' />
                   
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={handleUpdateProject}>
//                         Save Changes 
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//    </>
//   )
// }

// export default EditTitle

import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { editTitleAPI } from '../Service/allAPI';
import { EditResponseContext } from '../Context/ContextAPI';

function EditTitle({ project }) {
    const [projectData, setProjectData] = useState({
        id: project?._id || '',
        title: project?.title || ''
    });
    const {editResponse,setEditResponse}=useContext(EditResponseContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setProjectData({
            id: project?._id || '',
            title: project?.title || ''
        });
        setShow(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdateProject = async () => {
        const { title } = projectData;
        if (!title) {
            alert("Please fill in the title");
            return;
        }

        const token = sessionStorage.getItem("token");
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            };
            try {
                const result = await editTitleAPI(projectData.id, projectData, reqHeader);
                console.log(result);

                if (result.status === 200) {
                    handleClose();
                    setEditResponse(result.data)
                    // Optionally handle successful edit response here
                } else {
                    console.log(result.response);
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

   

    return (
        <>
            <div className="Addcontent">
                <div className="btn" onClick={handleShow}>
                    <i className="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        name="title"
                        value={projectData.title}
                        onChange={(e) => handleChange(e, 'title')}
                        type="text"
                        className="form-control mb-2"
                        placeholder="Project Title"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateProject}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTitle;
