import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      mes:[{}]
    }
    // this.myref = React.createRef()
    this.beizhu = ()=>{
      // alert(this.myref.value)
      alert(this.input1.value)
    }
    this.add = ()=>{
      const {mes} = this.state
      const a = {id:mes.length+1, mesg:this.input1.value}
      this.setState({mes:[a,...mes]})
    }
    this.delete = ()=>{
      console.log();
    }
  }  
  render() {
    return (
      <div>
        中间
      </div>
    )
  }
}
