import React from 'react'
import {Link} from 'react-router-dom'


export default function Header(props) {


    return (
        <div>
            <Link to={props.specialLink}><h1>Jot-It</h1></Link>
             
        </div>
    )
}
