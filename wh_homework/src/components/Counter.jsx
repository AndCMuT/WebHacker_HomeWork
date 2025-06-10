import { Component } from "react";
import styles from './Counter.module.css'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1 
        });
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className={`${styles.box}`} style={styles}>
                <button onClick={this.increment}>up</button>
                <p>{this.state.count}</p>
                <button onClick={this.decrement}>down</button>
            </div>
        )
    } 
}

export default Counter