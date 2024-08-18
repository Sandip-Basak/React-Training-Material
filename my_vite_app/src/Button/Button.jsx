import styles from './Button.module.css'
import React, { Component } from 'react'

export class Button extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    btnClick = () =>{
        this.setState({count: this.state.count + 1})
    }
    btnClickName = (name) =>{
        this.setState({count: this.state.count + 1,user: name})
    };

    handleClick = (e) =>{
      console.log(e);
      e.target.innerText="Ouch";
      if(this.state.count>10){
        // e.target.style.display = "none";
        e.target.classList.value = "btn btn-danger"
      }
    };
  render() {
    return (
      <div>
        <button className={styles.btn} onClick={this.btnClick}>Pressed {this.state.count} times</button>
        <button className={styles.btn} onClick={() => this.btnClickName("Sandip")}>{this.state.user} pressed {this.state.count} times</button>
        <button className={this.state.count > 5 ? "btn btn-warning" : styles.btn} onDoubleClick={(e) => this.handleClick(e)} onClick={this.btnClick}>Click Me</button>
      </div>
    )
  }
}

export default Button