import React, { Component } from 'react'

export class UserLogged extends Component {
    constructor(props) {
      super(props)
        
      if(this.props.logged){
          this.state = {
             message: "Welcome"
          }
        }
        else{
            this.state = {
               message: "Please Login to Continue"
            }    
      }
    }
  render() {
    if(this.props.logged){
        return (
          <div>
            <h3>{this.state.message} {this.props.username}</h3>
          </div>
        );
    }
    else{
        return (
          <div>
            <h3>{this.state.message}</h3>
          </div>
        );
    }
  }
}

export default UserLogged