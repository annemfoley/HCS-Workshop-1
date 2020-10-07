import React from "react";
import "./About.css";
import CutePic from "../../assets/anne_pic.png";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <div>
            <img src = {CutePic} className="intro-picture"/>
          </div>
        </div>
        <div className="intro-item">
          My name is Anne Foley. I am a first-year at Harvard University planning on studying Applied Math with Computer Science.
           I am originally from Naperville, Illinois.
        </div>
      </div>
    </div>
  );
}
