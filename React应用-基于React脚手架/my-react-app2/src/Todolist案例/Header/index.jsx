import React, { Component } from 'react'

export default class index extends Component {
  add = ()=>{
    const {todolist} = this.props
    const a = {id:todolist.length+1, name:this.input1.value}
    this.setState({todolist:[a,...todolist]})
  }
  render() {
    return (
      <div>
        <input type="text" ref={c=>this.input1=c} />
        <span><button onClick = {this.add}>留言</button></span>
      </div>
    )
  }
}
