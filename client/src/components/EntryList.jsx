import React from 'react'
import { Link } from 'react-router-dom'
import "../css/EntryList.css"
import DropDown from './DropDown'

export default function Entrylist(props) {
    return (
        <div className='entryListDiv'>
            <h2 className="ListHeadText">Your journal entries</h2>
            {props.data && props.data.entries.map((entry) =>
                <div className="individualEntry">
                    <Link to={`/entry/${entry.id}`}><h3>{entry.title}</h3></Link>
                    <img className="moodIcon" src={entry.mood.mood_icon} alt="mood icon"/>
                </div>
            )}
        </div>
    )
}
