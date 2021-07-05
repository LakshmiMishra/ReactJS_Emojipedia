import React from "react";
import Header from "./Header";
import Dictionary from "./Dictionary";
import emojipedia from "../emojipedia";
import Entry from "./Entry";



function App() {
  return (
    <div>  
<Header></Header>
<dl className="dictionary">
        {emojipedia.map(entry=>
        (<Entry key={entry.id} name={entry.name} emoji={entry.emoji} meaning={entry.meaning}/>))
        }

        </dl>
    </div>
  );
}

export default App;
