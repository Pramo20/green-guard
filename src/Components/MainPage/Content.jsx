import React, { useState } from "react";
import "./Content.css";

export default function Content() {
  // Setting initial state to 0
  const [numberOfIssues, setNumberOfIssues] = useState(0);
  const [numberOfIssuesSolved, setNumberOfIssuesSolved] = useState(0);

  return (
    <div className="container">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d250558.01494918446!2d77.00109328775638!3d11.115687936524239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714577891917!5m2!1sen!2sin"
          width={1300}
          height={350}
          style={{ border: "0", borderRadius: "10px", borderColor: "#395b64" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="issue_report">
        <div className="issue1">
          <h1>ISSUES REPORTED</h1>
          <br />
          <h2>{numberOfIssues}</h2>
        </div>
        <div className="issue2">
          <h1>ISSUES SOLVED</h1>
          <br />
          <h2>{numberOfIssuesSolved}</h2>
        </div>
      </div>
    </div>
  );
}
