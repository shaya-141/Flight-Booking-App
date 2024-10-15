import React from 'react'
import { useAuthContext } from '../Context/Auth'
import { Navigate } from 'react-router-dom'



function PrivateRouteComponent({children}) {

    const {IsLoggedin} = useAuthContext()
    

    if (!IsLoggedin) {
       return <Navigate to={'/Login'} replace></Navigate>
    }

    return children
  
  
}

export default PrivateRouteComponent