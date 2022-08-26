import React from "react";

const Card = ({id, name, email}) => {
        return(
            <>
                <div className="bg-light-green div br3 dib pa2 ma2 grow bw2 shadow-5 tc">
                    <img alt="robot" src={`https://robohash.org/${id +11}?200xx200`}></img>
                    <div>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                </div>            
            </>

        );
}
export default Card;