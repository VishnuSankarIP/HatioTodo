import React, { createContext, useState } from 'react'
export const EditResponseContext=createContext();


function ContextAPI({children}) {
    const [editResponse, setEditResponse] = useState("");

  return (
    <EditResponseContext.Provider value={{ editResponse, setEditResponse }}>
            {children}
        </EditResponseContext.Provider>
  )
}

export default ContextAPI