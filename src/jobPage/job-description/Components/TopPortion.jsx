import React from "react";
import "./TopPortion.css"

const TopPortion = (props) => {
    const {url, companyName, rating, positionName, recency, country} = props;
    return(
        <div className="description-top-portion">
            <div className="top-first-column">
                <img className="img-top-portion" src={url}></img>
            </div>
            <div className="top-second-column">
                <div className="top-row1">
                    <div className="job-text">
                        <span className="company-name">
                            {companyName}         
                            <span className="rating">
                                {rating}   ★
                            </span>
                        </span> 
                    </div>
                </div>
                <div className="top-row2">
                    Go to Company Page
                </div>
                <div className="top-row3">
                    {positionName}
                </div>
                <div className="top-row4">
                    <div className="top-row4-container">
                        <span className="date-posted">
                            about {recency}
                        </span>
                        <span className="country">
                            <i class="uil uil-map-marker location-logo"></i>
                            <span className="country-name">
                                {country}
                            </span>
                        </span>
                    </div>
                </div>
                <div className="top-row5">
                    <div className="cta-buttons">
                        <div className="apply-text">
                            <i className="uil uil-external-link-alt apply-icon"></i>
                            Apply
                        </div>
                        <div className="save-text">
                            Save
                        </div>
                        <div className="share-container">
                            <i class="uil uil-share-alt share-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPortion