import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    return(
        <>
            {
                robots.map((r, i) =>{
                    return <Card key={i} name={r.name} email={r.email}id={r.id}/>
                })

            }
        </>
    );


}
export default CardList;