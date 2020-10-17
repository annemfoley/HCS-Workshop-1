import React, { useState }  from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDate(props.date);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDate, setActiveDate] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
        <TimeLineItem
            title="Software Developer Intern"
            dates = "June 2019-August 2019"
            description="Developed LabVIEW code for ultrasonic measurement equipment."
            setActiveTitle={setActiveTitle}
            setActiveDate={setActiveDate}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Fermilab Research Intern"
            dates = "June 2018-July 2018"
            description="Worked on reinforcement machine learning for developing telescope schedules."
            setActiveTitle={setActiveTitle}
            setActiveDate={setActiveDate}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <h2>{activeDate}</h2>
          <h4>{activeDescription}</h4>
        </div>
      </div>
    </div>
  );
}
