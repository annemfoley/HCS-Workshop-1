import React from "react";
import { useState }  from "react";

import "./About.css"
import CutePic from "../../assets/anne_pic.png";




export default function AboutScreen() {
  const [programmingDisplay, setprogrammingDisplay] = useState("");
  const [technologyDisplay, setTechnologyDisplay] = useState("");
  const [strengthsDisplay, setStrengthsDisplay] = useState("");



  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <div>
            <img src = {CutePic} className="intro-picture"/>
          </div>
        </div>
        <div className = "intro-item">
          <div classname = "intro-item">
            INTRODUCTION:
          </div>
          <div className="intro-item">
            My name is Anne Foley. I am a first-year at Harvard University planning on studying Applied Math with Computer Science.
            I am originally from Naperville, Illinois.
          </div>
          <div className = "intro-item">
            At Harvard, I am hoping to become a part of Harvard Computer Society (HCS), 
            Women in Computer Science (WiCS), 
            Student Astronomers at Harvard-Radcliffe (STAHR), 
            The Harvard Crimson Multimedia,. 
          </div>
          <div className = "intro-item">
            My hobbies are photography, running, and indoor-plant collecting. 
          </div>
        </div>
        
      </div>

      <div 
        className = "skill-header"
        onClick = {() => {
          if (programmingDisplay == "")
            setprogrammingDisplay( 
              <div className="skill-items"> <li>Java</li> <li>Python</li> <li>C/C++</li> <li>LabVIEW</li> </div>);
          else
            setprogrammingDisplay("");
        }}>
          PROGRAMMING SKILLS
          <div className = "skill-items">
            {programmingDisplay}
          </div>
      </div>


      <div 
        className = "skill-header"
        onClick = {() => {
          if (technologyDisplay == "")
            setTechnologyDisplay( 
              <div className="skill-items"> <li>Command Line</li> <li>GitHub</li> <li>Git</li> <li>Spreadsheets</li> </div>);
          else
            setTechnologyDisplay("");
        }}>
          TECHNOLOGY SKILLS
          <div className = "skill-items">
            {technologyDisplay}
          </div>
      </div>
    
      <div 
        className = "skill-header"
        onClick = {() => {
          if (strengthsDisplay == "")
            setStrengthsDisplay( 
              <div className="skill-items"> <li>Responsibility</li> <li>Teamwork</li> <li>Communication</li> <li>Creativity</li> </div>);
          else
            setStrengthsDisplay("");
        }}>
          GENERAL STRENGTHS
          <div className = "skill-items">
            {strengthsDisplay}
          </div>
      </div>    
    
    </div>
      
      
  );
}
