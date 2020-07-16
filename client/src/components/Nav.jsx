import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav(props) {
    return (
        <div>
           <Link to="/login"><button>log in</button></Link> 
           <button onClick={props.handleLogout}>log out</button> 
          
        </div>
    )
}
