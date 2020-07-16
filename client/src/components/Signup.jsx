import React from 'react'
import Header from './Header'

export default function Signup(props) {
    return (
        <div>
            <Header speacialLink="/"/>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.handleRegister();
            }}>
                <input onChange={props.handleChange} type="text" name="username" placeholder="username" />
                <input onChange={props.handleChange} type="password" name="password" placeholder="password" />
                {/* <input onChange={props.handleChange} type="password" name="confirmPassword" placeholder="confirm password" /> */}
                <button>submit</button>
            </form>
        </div>
    )
}
