import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
    this.myref = React.createRef()
    this.beizhu = ()=>{
      alert(this.myref.value)
    }
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myref} onBlur={this.beizhu}/>
      </div>
    )
  }
}
