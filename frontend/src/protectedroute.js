import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectedroute = ({isAuthenticated,children}) => {
  if(!isAuthenticated){     
    return   <Navigate to={'../login'}></Navigate>
  }
  else{
    return children
  }
}

export default Protectedroute