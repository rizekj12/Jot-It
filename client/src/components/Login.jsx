import React from 'react'
import "../css/Login.css"

export default function Login(props) {
    return (
        <div className="loginDiv">
            <h2 className="loginHeadText">Log in</h2>
            <form className="loginForm" onSubmit = {(e) => {
        e.preventDefault();
        try{
        props.handleLogin()}catch(error){
            console.log("wrong password or username")
        }
        }}>
                <input className="loginInput" onChange = {props.handleChange} type="text" name="username" placeholder="username"/>
                <input className="loginInput" onChange = {props.handleChange} type="password" name="password" placeholder="password"/>
                <button className="loginSubmit">submit</button>
            </form>
            {props.validPass === false ? <h3 className="errorMessage">invalid password or username</h3> : <h4></h4>}
            
        </div>
    )
}
