import React, {Component} from "react";
import styles from './Button.module.css'

class ToggleText extends Component {

constructor(props) {
  super(props);
  this.state = {
    isVisible: false
  };
}

toggleVisibility = () => {
  this.setState({ isVisible: !this.state.isVisible });
};

    render() {
        return (
            <button onClick={this.toggleVisibility} className={`${styles.pushMe_btn}`}>{this.state.isVisible ? 'Показать' : 'Скрыть'}</button>
        )
    }
}

export default ToggleText