import React from 'react'
import { Navigate } from 'react-router-dom'

const Protectedroute2 = ({isAuthenticated,children}) => {
  if(isAuthenticated){     
    return   <Navigate to={'../'}></Navigate>
  }
  else{
    return children
  }
}

export default Protectedroute2