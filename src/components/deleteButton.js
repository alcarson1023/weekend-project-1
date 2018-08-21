import React from 'react';
import {Component} from 'react'
import App from '../App.js'

class DeleteButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      isStatefulComponent: true
    }
  }
  render(){
    return(
      <button class='deleteButton' onClick={() => this.props.deleteIpsum(this.props.index)}>Delete</button>
  )
}
}

export default DeleteButton;