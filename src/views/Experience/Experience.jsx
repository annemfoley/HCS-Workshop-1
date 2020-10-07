import React from "react";
import "./Experience.css";

function TimeLineItem(props){
  return( <div className="timeline-item">
    <h1>{props.title}</h1>
    </div>)
}

export default function ExperienceScreen() {
  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem title = "Software Developer"> </TimeLineItem>
          <TimeLineItem title ="Fermilab Research Intern"> </TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>this is where the selected experience will go</h1>
          <p>all the date information about the selected experience!</p>
          <h4>description of the selected experience</h4>
        </div>
      </div>
    </div>
  );
}
