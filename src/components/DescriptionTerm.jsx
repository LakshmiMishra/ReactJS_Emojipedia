import React from "react";
import Emoji from "./Emoji";
import Span from "./Span";

function DescriptionTerm(props){
    return (
        <dt>
        <Emoji name={props.name} emoji={props.emoji}/>
        <Span name={props.name}/>
                  </dt>
    );
}
export default DescriptionTerm;
