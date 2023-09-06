import React, { useState, useEffect, useRef } from 'react';
import "./JobHeader.css"
import TechStack from "../tech-stack/TechStack";
import JobPosition from "./job-position/JobPosition";

const JobHeader = (props) => {
    const {url, companyName, positionName, jobPosition, recency, country, techStacks, salaryRange, isSelected, onSelect, rating} = props; // destructure
    const containerClass = isSelected ? "jobHeader-container selected" : "jobHeader-container";

    const containerRef = useRef(null);
    const techStackRefs = useRef([]);


    useEffect(() => {
        const containerWidth = 0.85*containerRef.current.offsetWidth;
        let totalWidth = 0;
        let ellipsisAdded = false;
    
        techStackRefs.current.forEach((el, index) => {
          totalWidth += el.offsetWidth;
    
          if (totalWidth > containerWidth && !ellipsisAdded) {
            const ellipsis = document.createElement('span');
            ellipsis.innerHTML = '...';
            ellipsis.className = "ellipsis"
            containerRef.current.appendChild(ellipsis);
            ellipsisAdded = true;
          }
    
          if (ellipsisAdded) {
            el.style.display = 'none';
          }
        });
      }, [techStacks]);

    return (
        <div className={containerClass} onClick={onSelect}>
            <div className="first-portion">
                <div className="jobListing">
                    <div className="company">
                        <img src={url} className="company-image"></img>
                        <div className="job-text">
                            <span className="company-name">
                                {companyName}         
                                <span className="rating">
                                    {rating}   ★
                                </span>
                            </span> 
                            <span className="position-name">
                                {positionName}
                            </span>
                        </div>
                    </div>
                    <div className="job-pos">
                        <JobPosition name={jobPosition}/>
                    </div>
                </div>
                <div className="recencyInfoAndCountry">
                    <span className="recency">
                        {recency}
                    </span>
                    <span className="country">
                        <i class="uil uil-map-marker location-logo"></i>
                        <span className="country-name">
                            {country}
                        </span>
                    </span>
                { 
                  salaryRange && (
                    <div className="salary-container">
                        <span className="salary-range">
                            {salaryRange} /mth
                        </span>
                        <span className="estimatedSalaryTag">
                            EST
                        </span>
                    </div>
                  )
                }
                </div>
            </div>
            <div className="second-portion">
                <div className="separator"></div> 
                <div className="jobListing-techstacks" ref={containerRef}>
                    {
                    techStacks.map((stack, index) => (
                        <TechStack 
                        ref={(el) => techStackRefs.current[index] = el}
                        key={index} 
                        name={stack} 
                        />
                    ))
                    }
                </div>
            </div>

        </div>
    )
}

export default JobHeader;