import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props)
    // this.myref = React.createRef()
    this.beizhu = ()=>{
      // alert(this.myref.value)
      alert(this.input1.value)
    }
    this.delete = ()=>{
      console.log(1);
    }
  }  
  render() { 
    return (
      <ul>
        {/* 留言板 */}
        {
          this.props.todolist.map((obj)=>{
            return <li key={obj.id}>{obj.name}  <button onClick={this.delete()}>删除</button> </li>
          })
        }
      </ul>
    )
  }
}