import React from 'react'
import '../css/Signup.css'

export default function Signup(props) {
    return (
        <>
            <div className="signupDiv">
                <h2 className="titleSignup">Make an Account</h2>
                <form className="signupForm" onSubmit={(e) => {
                    e.preventDefault();
                    props.handleRegister();
                }}>
                    <input className="signupInput" onChange={props.handleChange} type="text" name="username" placeholder="username" />
                    <input className="signupInput" onChange={props.handleChange} type="password" name="password" placeholder="password" />
                    <input className="signupInput" onChange={props.handleChange} type="password" name="confirmPassword" placeholder="confirm password" />
                    <button className="signupButton">submit</button>
                </form>
            </div>
        </>
    )
}
