import React from 'react'
import "../css/Login.css"

export default function Login(props) {
    return (
        <div className="loginDiv">
            <h2 className="loginHeadText">Log in</h2>
            <form className="loginForm" onSubmit = {(e) => {
        e.preventDefault();
        props.handleLogin();
        }}>
                <input className="loginInput" onChange = {props.handleChange} type="text" name="username" placeholder="username"/>
                <input className="loginInput" onChange = {props.handleChange} type="password" name="password" placeholder="password"/>
                <button className="loginSubmit">submit</button>
            </form>
            
        </div>
    )
}
