
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import AddTodo from '../Components/AddTodo'
import ViewTodo from '../Components/ViewTodo'

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth insideRegister />}></Route>
        <Route path='/dash' element={<Dashboard/>}></Route>
        <Route path='/add-todos/:pid' element={<AddTodo/>} ></Route>
        <Route  path='/view-todo/:pid' element={<ViewTodo/>}></Route>

      </Routes>
    </>
  )
}

export default App
