import React, { Component } from 'react';
import axios from 'axios'
import tattoo1 from './tattoo1.jpg';
import './App.css';
import List from './components/List/List'
import DeleteButton from './components/deleteButton'
import SubmitButton from './components/SubmitButton'

class App extends Component {
constructor(){
  super()

  this.state = {
    generatedIpsum: '',
    ipsumLength: '',
    didErr: false,
    history: [],
    input0: '',
    input1: '',
    input2: ''
  }

  this.addIpsum = this.addIpsum.bind(this)
  this.deleteIpsum = this.deleteIpsum.bind(this)
  this.getIpsum = this.getIpsum.bind(this)
  this.putIpsum = this.putIpsum.bind(this)
  this.handleChange0 = this.handleChange0.bind(this)
  this.handleChange1 = this.handleChange1.bind(this)
  this.handleChange2 = this.handleChange2.bind(this)
}
handleChange0(event){
  this.setState({input0: event.target.value})
}
handleChange1(event){
  this.setState({input1: event.target.value})
}
handleChange2(event){
  this.setState({input2: event.target.value})
}
componentDidMount(){
  axios.get('/api/ipsum')
  .then(response => {
    this.setState({generatedIpsum: response.data.data})
  })
}
getIpsum(){
  axios.get('/api/ipsum')
  .then(response => {
  this.setState({generatedIpsum: response.data.data})
  this.setState({history: response.data.history})
  })
  axios.post('/api/history', this.state.generatedIpsum)
}
addIpsum(){
  axios
  .post(`/api/ipsum`, {name: this.state.ipsumLength})
  .then(response => this.setState({ generatedIpsum: response.data, ipsumLength: ''}))
  .catch(err => this.setState({ didErr: true, ipsumLength: ''}))
}
deleteIpsum(id){
  axios
    .delete(`/api/ipsum/${id}`)
    .then(response => this.setState({ history: response.data.history }))
    .catch(err => console.log(err));
}
putIpsum(id,string){
  axios.put(`/api/ipsum/${id}/${string}`)
  .then(response => this.setState({history:response.data.history}))
  .catch(err => console.log(err))
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={tattoo1} className="App-logo" alt="logo" />
          <h1 className="App-title">Crappy Tattoo Generator</h1>
        </header>
        <List class= 'generatedIpsum' list={this.state.generatedIpsum} deleteIpsum={this.deleteIpsum} />
        <div>
          <button class= 'getButton' onClick={this.getIpsum}>New Tattoo!</button>  {/*maybe tie this to styling or something. Like an option to make the text italicized?*/}
        </div>
        <div class='history'>
        <h1 class='history'>History</h1>

{/*FIRST ITEM IN HISTORY*/}
        <div class='historyList'>{this.state.history[0]}</div>
        <br></br>
        {this.state.history.length >= 1 &&
        <div>
        <input value={this.state.input0} type='text' onChange={(input0) => this.handleChange0(input0)} placeholder = {this.state.history[0]} class='input'></input>
        <br></br>
        <SubmitButton putIpsum={this.putIpsum} index={0} input={this.state.input0} />
            <DeleteButton deleteIpsum={this.deleteIpsum} index={0} />
            </div>
          }
        <br></br>

{/*SECOND ITEM IN HISTORY*/}
        <div class='historyList'>{this.state.history[1]}</div>
        {this.state.history.length >= 2 &&
        <div>
        <input class='input' value={this.state.input1} type='text' onChange={(input1) => this.handleChange1(input1)} placeholder = {this.state.history[1]} class='input'></input>
        <br></br>
        <SubmitButton putIpsum={this.putIpsum} index={1} input={this.state.input1} />
            <DeleteButton deleteIpsum={this.deleteIpsum} index={1} />
            </div>
          }
        <br></br>

{/*THIRD ITEM IN HISTORY*/}
        <div class='historyList'>{this.state.history[2]}</div>
          {this.state.history.length >= 3 &&
        <div>
        <input value={this.state.input2} type='text' onChange={(input2) => this.handleChange2(input2)} placeholder = {this.state.history[2]} class='input'></input>
        <br></br>
        <SubmitButton putIpsum={this.putIpsum} index={2} input={this.state.input2} />
            <DeleteButton deleteIpsum={this.deleteIpsum} index={2} />
            </div>
          }
        {this.state.didErr && <h1>Whoops...</h1>}
      </div>
      </div>
    )
  }
}

export default App;

/** Parent */
{/* <button displayName={'Delete'} clickEvent={()=> this.deleteIpsum(id)} /> */}


/** child */
//  render(){
//   return <button onClick={this.props.clickEvent(2)}>{this.props.displayName}</button>
// }