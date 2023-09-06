import React from "react";
import "./LastPortion.css"

const LastPortion = (props) => {
    const responsibilities = props.job.responsibilities
    const qualifications = props.job.qualifications

    return (
        <div>
            <div className="lastPortion-title">Job Description</div>
            <div className="lastPortion-description">{props.job.jobDescription}</div>
            <div className="divider"></div>
            <div className="responsibilities-portion">
                <div className="responsibilities-text">Responsibilities</div>
                <ul className="responsibilities-list">
                    {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
            <div className="divider"></div>
            <div className="qualifications-portion">
                <div className="qualifications-text">Qualifications</div>
                <ul className="responsibilities-list">
                    {qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                    ))}
                </ul>
            </div>
            <div className="divider"></div>
            <div className="divider"></div>
            <div className="divider"></div>
            <a className="similarJobsButton">Search Similar Jobs</a>
        </div>
    )
}

export default LastPortion