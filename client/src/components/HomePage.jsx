import React from 'react'
import {Link} from 'react-router-dom'
import SamplePost from './SamplePost'
import "../css/HomePage.css"

export default function HomePage() {
    return (
      <>
        <div className="homePageDiv">
          <h2>Welcome to Jot-It!</h2>
          <p className="introParagraph">Studies show that utilizing a journal is one important way improve on your mental health, thats why Jot-it was created. Through this App you can express yourself daily, log your mood for the day, and keep track of your thoughts through time. If you don’t enjoy writing everyday no worries, start whenever you like, write whenever you like or as often as you like, however, we hope that you will utilize Jot-It for your own benefit!</p>  
          <Link to="/signup"><button className="signUpButton">Get started!</button></Link>
        </div>
        <div className="samplePostDiv">
          <SamplePost 
          sampleTitle="Feeling Optimistic" 
          image="https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&w=1000&q=80"
          sampleParagraph="I think today is going to be a good day, i'm feeling much better compared to yesterday...."
          />
          <SamplePost
          sampleTitle="Rough day"
          image="https://media1.popsugar-assets.com/files/thumbor/1ETRf9cxP6Q-f7Tw6PiRs6HzMLQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/02/07/877/n/1922441/a8a6dd53d8e5f646_StockSnap_6BO8QPKBLD.jpg"
          sampleParagraph="today wasn't an easy day, i'm glad I can atleast vent about to my journal and feel a little bit better"
          />
          <SamplePost
          sampleTitle="New Job!!!"
          image="https://upload.wikimedia.org/wikipedia/commons/2/26/Sunny_day_in_India.jpg"
          sampleParagraph="I am super excited about my new junior developer job!! I worked really hard to get here and I am excited to finally start today!"
          />
        </div>
      </>
    )
}
