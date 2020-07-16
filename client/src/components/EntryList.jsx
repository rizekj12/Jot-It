import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'


export default function Entrylist(props){
    return (
        <div>
            <Header/>
           <Link to="create-entry" ><h4>new entry</h4></Link> 
          <h2>this is the entries list</h2>
          {props.data && props.data.entries.map((entry) => 
                <h3>{entry.title}</h3>  
            )} 
        </div>
    )
}
