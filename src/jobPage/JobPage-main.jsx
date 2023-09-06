import React, { useState } from 'react';
import "./JobPage-main.css"
import JobHeader from "./job-header/JobHeader";
import { jobData } from "./jobs";
import JobDescription from './job-description/JobDescription';

const DynamicDescription = () => {
    return <div></div>;
  };

const JobPage = () => {
    const [selectedJob, setSelectedJob] = useState(jobData[0])
      
    return(
        <div className="job-grid">  
            <div className="job-left-col">
            {jobData.map((job, index) => (
                <JobHeader 
                key={index}
                isSelected={job === selectedJob}
                onSelect={() => setSelectedJob(jobData[index])}  
                url={job.url}
                companyName={job.companyName}
                positionName={job.positionName}
                jobPosition={job.jobPosition}
                rating={job.rating}
                recency={job.recency}
                country={job.country}
                techStacks={job.techStacks}
                salaryRange={job.salaryRange}
                />
            ))}
            </div>
            <div className="job-right-col">
                {selectedJob && <JobDescription job={selectedJob} />}
            </div>
        </div>
    )
}

export default JobPage;