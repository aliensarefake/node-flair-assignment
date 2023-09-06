import React from "react";
import "./JobDescription.css"
import TopPortion from "./Components/TopPortion";
import MidPortion from "./Components/MidPortion";
import LastPortion from "./Components/LastPortion";
import TechStacks from "./Components/TechStacks";
import SalaryCard from "./Components/SalaryCard";

const JobDescription = (props) =>{
    const {job} = props
    const { 
        url, 
        companyName, 
        positionName, 
        rating, 
        recency, 
        country, 
        techStacks, 
      } = job;
      console.log(url)
    return (
        <div className="jobDescription-main">
            <div className="jobDescription-container"> 
                <div className="jobDescription-content">
                    <TopPortion url={url} companyName={companyName} rating={rating} positionName={positionName} recency={recency} country={country}/>
                    <div className="linebreak"></div>
                    <MidPortion job={job}/>
                    <div className="linebreak"></div>
                    <TechStacks stacks={techStacks}/>
                    <div className="linebreak"></div>
                    <LastPortion job={job}/>
                </div>
            </div>
            <SalaryCard job={job}/>
        </div>
    )
}


export default JobDescription;