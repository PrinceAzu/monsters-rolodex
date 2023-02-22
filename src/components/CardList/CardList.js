import React from "react";
import Card from "../Card/Card"

import "./CardList.css"

const cardList = (props) => {
    return (
        <div className="CardList">
            {
                props.gods.map(god => (
                  <Card key={god.id} god={god}/>
                ))
            }
        </div>
    );
};

export default cardList;