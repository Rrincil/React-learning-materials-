//rfc 函数组件快捷键  rcc 类式组件快捷键
import React, { Component } from 'react';
import Content from './Content';
import Header from './Header'
import Footer from './Footer'
class index extends Component {
  state = {todolist:[
    {id:'01',name:'首页',done:'true'}
  ]}
  render() {
    return (
      <div className='d1'>
        <Header todolist={this.state.todolist}/>
        <Content todolist={this.state.todolist}/>
        <Footer/>
      </div>
    );
  }
} 

export default index;