import React, { Component } from 'react';

import './App.css'

import './style.css'
class App extends Component {

  state={
        list:[],
        }
 
componentDidMount(){
  fetch('/list')
  .then(res => {
      return res.json()
   })
  .then(users => { 
      this.setState({ list })
   });}
render(){

 
  return (
    <div className='App'>
      <h2 style={{textDecoration:'underline'}}> list</h2>
<ul>
  {this.state.list.map((item,index)=>{
    <li key={index}> {item.name} </li>
  })}
</ul>
 </div>);
}
  
}

export default App;
