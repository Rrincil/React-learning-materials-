import React, { Component } from 'react'

export default class app extends Component {
  state = {
    count:0
  }
  add = ()=>{
    const {count} = this.props.state
    count++
    this.setState({count},()=>{
      console.log(this.props.state.count);
    })
  }
  add2 = ()=>{
    this.setState((state,props)=>{
      return {count:state.count+1}
    })
  }
  render() {
    const {count} = thid.props.state
    return (

      <div>
        <h1>app</h1>
        <p>{count}</p>
        <button onClick={this.add}>加</button>
        <button onClick={this.add2}>函数式加</button>
      </div>
    )
  }
}
