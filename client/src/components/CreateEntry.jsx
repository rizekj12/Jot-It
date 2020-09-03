import React, { Component } from 'react'
import { Link , withRouter} from 'react-router-dom'
import { getMoods } from '../services/moods'
import '../css/CreateEntry.css'
import {
    MorphIcon,
    CloseButton,
    NavButton,
    PlusButton,
} from 'react-svg-buttons'

 class CreateEntry extends Component {
    state={
        moods:[]
    }
    
    componentDidMount = () => {
        this.fetchMoods()
    }

    fetchMoods = async () => {
    const moods = await getMoods()
    this.setState({
        moods
    })       
    }

    render() {
        return (
            <>
            <h2 className="ListHeadText">create a journal entry</h2>
            <div className="createEntryDiv">
                <form className="createEntryForm"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.handleCreate(this.props.newEntry)
                        this.props.history.push("/entries-list")
                    }}>
                    <input className="theInput" onChange={this.props.handleChange} name="title" type="text" placeholder="Title" />
                    <input className="theInput" onChange={this.props.handleChange} name="image_url" type="text" placeholder="Image URL" />
                    <textarea className="theInput theContent" onChange={this.props.handleChange} name="content" type="text" placeholder="content..." ></textarea>
                    <select  className="theInput" onChange={this.props.handleChange} name="mood_id">
                        <option selected disabled>-- select a mood --</option>
                        {this.state.moods.map( (mood) => (
                            <option key={mood.id} value={mood.id}>{mood.name}</option>
                        ))}
                    </select>
                    <button className="theButton"><MorphIcon type="check" /></button>
                    
                    
                   
                </form>
            </div>
            </>
        )
    }
}

export default withRouter(CreateEntry)