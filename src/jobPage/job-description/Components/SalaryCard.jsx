import "./SalaryCard.css"
import React from "react"

const SalaryCard = (props) => {
    const {job} = props;

    const formatSalaryRange = (salaryRange) => {
        const [lowerBound, upperBound] = salaryRange.replace(/S\$/g, '').replace(/,/g, '').split(' - ').map(Number);
        
        const formattedLower = "$"+(lowerBound / 1000).toFixed(1) + "k";
        const formattedUpper = "$"+(upperBound / 1000).toFixed(1) + "k";
        
        return `${formattedLower} - ${formattedUpper}`;
      };


    return (
        <div className="salaryCard-content">
            <div className="salary-title">
                Salaries at {job.companyName}
            </div>
            <div className="salary-description">
                <div>
                    {
                        'salaryRange' in job ? (
                        <>
                            <div>Salaries from {job.companyName} that are similar to {job.positionName}</div>
                            <div className="card-salary-range">{formatSalaryRange(job.salaryRange)}</div>
                            <div>Estimated Salary</div>
                        </>
                        ) : (
                        <div>There are salaries from {job.companyName} that are similar to {job.positionName}</div>
                        )
                    }
                </div>
            </div>
            <a className="salary-anchor">
                View more salaries from {job.companyName} →
            </a>
        </div>
    )
}

export default SalaryCard;