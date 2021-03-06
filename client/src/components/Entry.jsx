import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { getMoods } from '../services/moods'
import '../css/Entry.css'


class Entry extends Component {
    state = {
        moods: [],
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

        const entryInfo = this.props.match.params.id
        const selectedEntry = this.props.entryData.find(entry => {
            return parseInt(entryInfo) === entry.id
        })
        const moodOfEntry = this.state.moods.find(mood => {
            return mood.id === selectedEntry.mood_id
        })
        return (
            <>
                {selectedEntry && moodOfEntry &&
                    <div className="entryDiv">
                        <h2 className="entryTitle">{selectedEntry.title}</h2>
                        <div className="contentDiv">
                            <img className="journal_img" src={selectedEntry.image_url} alt="" />
                            <h3 className="moodStatus">Feeling {moodOfEntry.name}</h3>
                            <p className="entryParagraph">{selectedEntry.content}</p>
                            <div className="divAgain">
                                <div className="iconAndDate">
                                    <h4 className="entryDate">{selectedEntry.created_at.slice(0, 10)}</h4>
                                    <img className="moodImage" src={moodOfEntry.mood_icon} alt="mood icon" />
                                </div>
                            </div>
                        </div>
                        <div className="buttonsDiv">
                            <Link to={`/update-entry/${selectedEntry.id}`}>
                                <button className="entryButton">update</button>
                            </Link>
                            <button className="entryButton" onClick={() => this.props.handleDelete(selectedEntry.id)}>delete</button>
                        </div>

                    </div>
                }
            </>
        )
    }
}


export default withRouter(Entry)