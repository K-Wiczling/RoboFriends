import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            search: ''
        }
    }
    onSerchChange= (e) => {
        this.setState({search: e.target.value});
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase());
        });
        if(!filteredRobots){
            return (<h1>Loading</h1>);            
        }else{
            return(
                <>
                    <div className="tc">
                        <h1 className="f1">RoboFriends</h1>
                        <SearchBox searchChange={this.onSerchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots}/>
                        </Scroll>
                    </div>
                </>
            );

        }
    }
}

export default App