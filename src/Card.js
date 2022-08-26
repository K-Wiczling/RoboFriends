import React, {Component} from "react";

class Card extends Component{
    render(){
        return(
            <>
                <div className="bg-light-green div br3 dib pa2 ma2 grow bw2 shadow-5 tc">
                    <img alt="robot" src={`https://robohash.org/${this.props.id +11}?200xx200`}></img>
                    <div>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.email}</p>
                    </div>
                </div>            
            </>

        );
    }
}
export default Card;