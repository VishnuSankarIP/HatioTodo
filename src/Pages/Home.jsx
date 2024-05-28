import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/todo.png'
function Home() {
  return (
   <>
   <div style={{ height: '100vh', backgroundColor: '#b8b8ff' }} className='w-100 d-flex justify-content-center align-items-center rounded'>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="container ms-5 mt-5 ">
              <h1 style={{ fontSize: '80px', fontWeight: '800', color: 'white' }}><i class="fa-solid fa-diagram-project"></i>Todo App</h1>
            
              
                

                <Link to={'/login'}><button className='p-2 rounded' style={{ backgroundColor: '#8a2be2', border: 'none', color: 'white' }}>Starts to Explore</button></Link>
                       </div>
          </div>
          <div className="col-lg-6 ">
            <img src={logo} style={{ width:'100%',height:'600px' }} ></img>
          </div>
        </div>
      </div>
   </>
  )
}

export default Home