import TechStack from "../../tech-stack/TechStack";
import React from "react";
import "./TechStacks.css"

const TechStacks = (props) => {
    const {stacks} = props
    console.log(stacks)
    return (
        <div className="techStacks-container">
            <div className="title">Tech Stacks</div>
            {stacks.map((stack, index) => (
                <TechStack key={index} name={stack} />
            ))}
        </div>
    )
}

export default TechStacks;