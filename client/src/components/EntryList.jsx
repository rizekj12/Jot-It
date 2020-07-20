import React from 'react'
import { Link } from 'react-router-dom'
import "../css/EntryList.css"


export default function Entrylist(props) {
    return (
        <div className='entryListDiv'>
            {/* <Link to="create-entry" ><h4>new entry</h4></Link> */}
            <h2 className="ListHeadText">Your journal entries</h2>
            {props.data && props.data.entries.map((entry) =>
                <div className="individualEntry">
                    <Link to={`/entry/${entry.id}`}><h3>{entry.title}</h3></Link>
                </div>
            )}
        </div>
    )
}
