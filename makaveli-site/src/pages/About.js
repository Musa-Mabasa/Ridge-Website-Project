import React from 'react'
import './About.css'

function About() {
  return (
    <div id='aboutWrapper'>
      <div id='about-header'>
        <h2 style={{color: "white"}}>
            About me
        </h2>
      </div>
      <div id='about-text' >
        <p style={{color: "white"}}>
          Ridge Makavelli is a Chemical engineer, a musician, an author, and and athlete. 
        </p>
        <br/>
        <p style={{color: "white"}}>
          After pursuing his dreams in Chemical engineering at the University of Pretoria, which he graduated from, Ridge decided to connect with his roots and venture into music and writing. Being a creative force at large; He has recently published some of the most anticipated non-fiction books and produced great music. Possessing an energetic spirit, Ridge is also a marathon runner.
        </p>
      </div>
    </div>
    
  )
}

export default About
