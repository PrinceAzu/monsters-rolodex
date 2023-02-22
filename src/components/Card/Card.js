import React from "react";
import "./Card.css";

const card = (props) => {
    return (
        <div className="CardContainer">
            <img alt="god" src={`https://robohash.org/${props.god.id}?set=set2&size=180x180`}/>
            <h2>{props.god.name}</h2>
            <p>{props.god.email}</p>
        </div>
    );
}

export default card;