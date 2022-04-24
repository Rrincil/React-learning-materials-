import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
export default class index extends Component {
  constructor(props){
    super(props)
    // this.myref = React.createRef()
    this.beizhu = ()=>{
      // alert(this.myref.value)
      alert(this.input1.value)
    }
  }  
  add = (event)=>{
    // .trim()---去掉空格
    if (this.input1.value.trim() !== ''){
      const {todolist} = this.props
      const a = {id:uuidv4(), name:this.input1.value,done:false}
      this.setState({todolist:[a,...todolist]})
      this.props.liuyan1([a,...todolist])
    } else{
      alert("输入不能为空")
    }
    //清空输入
    this.input1.value =''
  }  
  add2 = (event)=>{
    if(event.keyCode === 13){
      const {todolist} = this.props
      const a = {id:uuidv4(), name:this.input1.value,done:false}
      this.setState({todolist:[a,...todolist]})
      this.props.liuyan1([a,...todolist])
    } else{
      alert("输入不能为空")
    }
    //清空输入
    this.input1.value =''   
  }
  render() {
    return (
      <div>
        <input type="text" ref={c=>this.input1=c} onKeyUp = {this.add2}/>
        <span><button  onClick = {this.add}>留言</button></span>
      </div>
    )
  }
}
