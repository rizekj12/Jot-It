import React from 'react'
import '../css/SamplePost.css'

export default function SamplePost(props) {
    return (
        <div className="entireDiv">
            <h3>{props.sampleTitle}</h3>
            <div className="sampleEntryDiv">
                <img className="sampleImage" src={props.image} alt=""/>
                <h4>Feeling {props.sampleMood}</h4>
                <p className="sampleText">{props.sampleParagraph}</p>
                <img className="sampleMoodIcon" src={props.moodImage} alt="mood icon"/>
            </div>
        </div>
    )
}
