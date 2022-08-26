import React, {Component} from "react";
import Card from "./Card";

class CardList extends Component{

    render(){
        return(
            <>
                {
                    this.props.robots.map((r, i) =>{
                        return <Card key={i} name={r.name} email={r.email}id={r.id}/>
                    })

                }
            </>
        );
    }


}
export default CardList;