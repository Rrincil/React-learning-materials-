import React, { Component } from 'react'
export default class index extends Component {
  constructor(props){
    super(props)
    // this.myref = React.createRef()
    this.beizhu = ()=>{
      // alert(this.myref.value)
      alert(this.input1.value)
    }
  }  
  add = ()=>{
    const {todolist} = this.props
    const a = {id:todolist.length+1, name:this.input1.value}
    this.setState({todolist:[a,...todolist]})
    this.props.liuyan1([a,...todolist])
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
