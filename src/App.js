import React, {Component} from "react";
import CardList from "./CardList";
import {robots} from "./robots"
import SearchBox from "./SearchBox";

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            search: ''
        }
    }
    onSerchChange= (e) => {
        this.setState({search: e.target.value});
 
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase());
        });
        return(
            <>
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSerchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            </>
        );
    }
}

export default App