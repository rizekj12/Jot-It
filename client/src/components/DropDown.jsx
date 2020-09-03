import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../css/DropDown.css'

function DropDown({title, items, multiSelect = false}){
 const [open, setOpen] = useState(false)
 const [selection, setSelection] = useState([])

 const toggle = () => setOpen(!open)

 return (
  <>
   
        <button className="open-dd-button" onClick={() => toggle(!open)}>{open ? 'V' : '>'}</button>
    {open && (
      <div className="dd-list">
      <button className="dd-button">Edit</button>
      <button className="dd-button">Delete</button>
      </div>
    )}
  </>

 )

}

export default DropDown;