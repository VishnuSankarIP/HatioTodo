import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

// register api
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

// login api
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

// add-project api
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
 }

 // get user project api

export const getAllProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-project`,"",reqHeader)
}

// add todos api
export const addTodosAPI=async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-todo/${projectId}`,reqBody,reqHeader)
 }

 //   edit title api

export const editTitleAPI = async(projectId, reqBody, reqHeader) => {
    return await commonAPI("PUT",`${SERVER_URL}/edit-title/${projectId}`,reqBody,reqHeader);
  }
  
// get todo

export const getTodoAPI = async (projectId,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/get-todo/${projectId}`,"",reqHeader)
}
  
//   remove todo

export const removeTodoAPI = async (projectId, todoId, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_URL}/remove-todo/${projectId}/${todoId}`, {}, reqHeader);
};