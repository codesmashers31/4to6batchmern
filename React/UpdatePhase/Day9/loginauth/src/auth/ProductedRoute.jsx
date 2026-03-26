
import { Navigate } from 'react-router-dom'

const ProductedRoute = ({children}) => {
 
    const user = JSON.parse(localStorage.getItem("authData"))
   
    return user? children : <Navigate to={"/login"}/>
   

}

export default ProductedRoute