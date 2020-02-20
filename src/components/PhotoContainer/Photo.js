import React from "react";

export default function Photo(props) {

    if (!props.nasaData.hdurl) return <h3>Loading Photo...</h3>;
    return (
        
        <div className = "photo">
            <img src = {props.nasaData.hdurl} alt = "NASA" />
        </div>
    );
}