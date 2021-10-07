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
  add = (event)=>{
    // .trim()---去掉空格
    if (this.input1.value.trim() !== ''){
      const {todolist} = this.props
      const a = {id:todolist.length+1, name:this.input1.value}
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
        <input type="text" ref={c=>this.input1=c} />
        <span><button  onClick = {this.add}>留言</button></span>
      </div>
    )
  }
}
