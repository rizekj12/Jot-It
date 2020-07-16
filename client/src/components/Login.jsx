import React from 'react'
import Header from './Header'

export default function Login(props) {
    return (
        <div>
            <Header specialLink="/"/>
            <form onSubmit = {(e) => {
        e.preventDefault();
        props.handleLogin();
        }}>
                <input onChange = {props.handleChange} type="text" name="username" placeholder="username"/>
                <input onChange = {props.handleChange} type="password" name="password" placeholder="password"/>
                <button>submit</button>
            </form>
            
        </div>
    )
}
