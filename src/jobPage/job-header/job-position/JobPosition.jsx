import React from "react";
import "./JobPosition.css"

const JobPosition = (props) => {
    return (
        <div className="jobPosition-container">
            <div className="jobPosition-description">{props.name}</div>
        </div>
    )
}

export default JobPosition;