import React from "react";
import DescriptionTerm from "./DescriptionTerm";
import DescriptionDetails from "./DescriptionDetails";
function Entry(props){
    return (
        <div className="term">
        <DescriptionTerm name={props.name} emoji={props.emoji}/>
        <DescriptionDetails description={props.meaning}/>
                </div>
    );
}
export default Entry;
