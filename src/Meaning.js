import React from 'react';

export default function Meaning (props){
return (
<div>
<h3>{props.meaning.partOfSpeech}</h3>
<p>{props.meaning.definitions[0].definition}</p>
</div>


);
}