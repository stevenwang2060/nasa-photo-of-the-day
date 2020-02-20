import React from "react";
import { Image } from "../Styles";

export default function Photo(props) {

    if (!props.nasaData.hdurl) return <h3>Loading Photo...</h3>;
    return (
        
        <div className = "photo">
            <Image src = {props.nasaData.hdurl} alt = "NASA" />
        </div>
    );
}