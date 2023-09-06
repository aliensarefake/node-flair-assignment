import React, { forwardRef } from "react";
import "./TechStack.css"

const TechStack = forwardRef((props, ref) => {
    return (
        <div className="techStack-container" ref={ref}>
            <div className="techStack-description">{props.name}</div>
        </div>
    )
})

export default TechStack;