import React from "react";
import "./Education.css"

export default function EducationScreen() {
    return(
        <div className = "edu-background">

        <div className="edu-header">
        HARVARD UNIVERSITY
        <div className="edu-items">
                <li>CS 61: 2020 FALL, Systems Programming and Assembly</li>
            </div>
        </div>

        <div className = "edu-header">
            NAPERVILLE NORTH HIGH SCHOOL:
            <div className="edu-items">
                <li>Software Engineering: 2018-19, Data Structures, Algorithms, and Machine Learning</li>
                <li>AP Computer Science: 2017-18, Java Objected Oriented Programming</li>
                <li>Programming 1/2: 2016-17, Introduction to Python Programming</li>
            </div>
        </div>
    </div> 
    )
}