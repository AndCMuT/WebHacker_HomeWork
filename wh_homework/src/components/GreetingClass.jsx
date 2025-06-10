import React, {Component} from "react";

class GreetingClass extends Component {
    render() {
        return (
            <p>Hello, {this.props.name}!</p>
        );
    }
}

export default GreetingClass