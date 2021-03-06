import React from 'react';
import Synonyms from "./Synonyms";
import './Meaning.css';

export default function Meaning (props){
return (
<div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition, index){
        return(
        <div key={index}>
            <div>
              <span className="definition"> {definition.definition}</span>
            <br/>
            <span className="example">Example: <em>{definition.example}</em></span>
           <br/>
                <Synonyms synonyms={definition.synonyms}/>
            </div>
        </div>

        );
        })}
</div>


);
}