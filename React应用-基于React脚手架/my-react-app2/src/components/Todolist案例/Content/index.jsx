import React, { Component } from 'react'
import './Content.css'
import Item from './item'
export default class index extends Component {
  delete = (item)=>{
    console.log(item);
    const {todolist}  = this.props
    const todolist1 = todolist.splice(item,1)
    console.log(todolist1)
    this.props.liuyan1(todolist1)
  }
  render() { 
    return  this.props.todolist.map((obj,index)=>{
        return(
          <Item key={obj.id} todolist={obj} delete= {this.delete}/>
        )
      })
    
  }
}