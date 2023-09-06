import React from "react";
import "./MidPortion.css"
import TechStack from "../../tech-stack/TechStack";

const MidPortion = (props) => {
    const stacks = props.job.techStacks

    return(
        <div className="midPortion-grid">
            {props.job.salaryRange && (
                <div className="grid-child">
                    <div className="title">Salary</div>
                    <div className="salary-container">
                        <span className="grid-text">
                            {props.job.salaryRange} /mth
                        </span>
                        <span className="estimatedSalaryTag">
                            EST
                        </span>
                    </div>
                </div>
            )}
            <div className="grid-child">
                <div className="title">Job Type</div>
                <div className="grid-text">
                    {props.job.jobType}
                </div>
            </div>
            {props.job.seniority && 
            <div className="grid-child">
                <div className="title">Seniority</div>
                <div className="wrapper">
                    <TechStack name={props.job.seniority}/>
                </div>
            </div>
            }
            <div className="grid-child">
                <div className="title">Years of Experience</div>
                <div className="grid-text">
                    {props.job.yoe ? props.job.yoe : 'Information not provided'}
                </div>
            </div>
        </div>
    )
}

export default MidPortion