import React, {Component} from "react";

class Searchbox extends Component{
    render(){
        return(
            <>
                <div className="pa2">
                    <input 
                        onChange={this.props.searchChange}
                        className="pa3 ba b--green bg-lightest-blue"
                        type="searchbox" 
                        placeholder="Find robots"
                    />
                </div>
            </>
        );
    }
}

export default Searchbox