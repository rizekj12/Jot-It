import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Head.css'


export default function Header(props) {


    return (
        <div className="heading">
            {props.currentUser ? <Link to='/entries-list'><h1 className="Logo">Jot-It</h1></Link> : <Link to='/'><h1 className="Logo">Jot-It</h1></Link>}
            {/* // <h1 className="Logo">Jot-It</h1> */}
            {props.currentUser ?
                <div className="loggedinNav">
                    <p className="navText" ><a onClick={props.handleLogout}>Log out</a>
                     | <Link to="/create-entry" className="navText" >New Entry</Link> | <Link to="/entries-list" className="navText">Entries</Link></p>
                </div> :
                <Link to="/login" className="loginButton" >Log in</Link>
            }
        </div>
    )
}