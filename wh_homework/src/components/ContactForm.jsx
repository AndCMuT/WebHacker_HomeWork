import { Component } from "react";
import './ContactForm.css'

class ContactForm extends Component {


constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: ''
  };
}


    
    render() {
        return(
            <form className="contactForm">
                <input type="text" id="name" placeholder="Введите имя" onChange={e => this.setState({name: e.target.value})} />
                <input type="email" id="email" placeholder="Введите email" onChange={e => this.setState({email: e.target.value})} />
                <button type="button" onClick={() => console.log(this.state.name, this.state.email)}>Отправить</button>
            </form>
        )
    }
}
export default ContactForm