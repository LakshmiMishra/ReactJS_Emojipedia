import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function createEntry(entry){
    return(
        <Entry
            key={entry.id}
            name={entry.name}
            emoji={entry.emoji}
            meaning={entry.meaning}
        />
    );
}
function Dictionary(){
    return(
        <dl className="dictionary">
        {emojipedia.map(createEntry)}
        </dl>
    )
}
export default Dictionary;
