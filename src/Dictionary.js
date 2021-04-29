import React, {useState} from 'react';
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";


export default function Diciontary(){
let [keyword, setKeyword]= useState("");
let[results, setResults]= useState(null);
let [photos, setPhotos]=useState(null);

function handleResponse(response){
  setResults(response.data[0]);
}

function handlePexelsResponse (response){
console.log(response);
setPhotos(response.data.photos);
}

function search(event){ 
    event.preventDefault();
    
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey="563492ad6f917000010000016ff81a2c23864f3d963e6434b167f466";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios.get(pexelsApiUrl, { headers:{"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

    return(
    <div className="Dictionary">
        
        <form onSubmit={search} >
            <input type="search" placeholder=" What are you looking for?" autoFocus={true} onChange={handleKeywordChange}/>
        </form>
        
        <Results results={results} />
        <Photos photos={photos}/>
    </div>
)
}