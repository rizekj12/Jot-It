import React from 'react'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { getMoods } from '../services/moods'
import "../css/UpdateEntry.css"

 class UpdateEntry extends Component{
    state={
        selectedEntry: {},
        moods: []
    }

    componentDidMount = () => {
        const entryInfo = this.props.match.params.id
        const selectedEntry = this.props.entryData.find(entry => {
            return parseInt(entryInfo) === entry.id
        })
        this.fetchMoods()
        this.setState({
            selectedEntry
        })
    }

    fetchMoods = async () => {
        const moods = await getMoods()
        this.setState({
            moods
        })       
        }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value)
        this.setState(prevState => ({
          selectedEntry: {
            ...prevState.selectedEntry,
            [name]: value
          }
        }));
      }

    render(){
    return (
        
        <div className="updateEntryDiv">
            <form className="updateForm" onSubmit={(e)=> {
                e.preventDefault();
                this.props.handleUpdate(this.state.selectedEntry)
            }}>
                <input className="updateFormInput" onChange={this.handleChange} value={this.state.selectedEntry.title} name="title" type="text" placeholder="Title"/>
                <input className="updateFormInput"onChange={this.handleChange} value={this.state.selectedEntry.image_url} name="image_url" type="text" placeholder="Image URL"/>
                <input className="updateFormInput updateContent"onChange={this.handleChange} value={this.state.selectedEntry.content}name="content" type="text" placeholder="content..."/>
                <select className="updateFormInput" onChange={this.handleChange} name="mood_id">
                        <option selected disabled>-- select a mood --</option>
                        {this.state.moods.map( (mood) => (
                            <option key={mood.id} value={mood.id}>{mood.name}</option>
                        ))}
                    </select>
           <button className="updateEntryButton">submit</button>
            </form>
            
        </div>
    )
}}
export default withRouter(UpdateEntry)