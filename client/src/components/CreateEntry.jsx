import React from 'react'
import Header from './Header'

export default function CreateEntry(props) {
  
    return (
        <div>
            <Header specialLink="/entries-list"/>
            <h2>create a journal entry</h2>
            <form 
            onSubmit={(e) => {
                e.preventDefault();
                props.handleCreate(props.newEntry)
                // props.history.push('/entries-list')
            }}
            >
                <input onChange={props.handleChange} name="title" type="text" placeholder="Title"/>
                <input onChange={props.handleChange} name="image_url" type="text" placeholder="Image URL"/>
                <input onChange={props.handleChange} name="content" type="text" placeholder="content..."/>
                <input onChange={props.handleChange} name="mood_id" type="text" placeholder="mood"/>
                
                    {/* <select name="mood">
                        <option value='blank'></option>
                        <option value='sad'>sad</option>
                        <option value='angry'>angry</option>
                        <option value='meh'>meh</option>
                        <option value='happy'>happy</option>
                        <option value='excited'>excited</option>
                    </select> */}
                <button>submit</button>
            </form>
        </div>
    )
}
