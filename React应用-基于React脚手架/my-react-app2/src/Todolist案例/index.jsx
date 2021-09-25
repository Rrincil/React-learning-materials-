//rfc 函数组件快捷键  rcc 类式组件快捷键
import React, { Component } from 'react';
import Content from './Content';
import Header from './Header'
import Footer from './Footer'
class index extends Component {
  state = {todolist:[
    {id:'01',name:'吃饭',done:false},
    {id:'02',name:'睡觉',done:true},
  ]}
  //处理header传递过来的数据
  liuyan = (data)=>{
    console.log(data.value);
    this.setState({
      todolist:data
    })
  }
  render() {
    
    return (
      <div className='d1'>
        <button onClick={this.liuyan}>刷新</button>
        <Header todolist={this.state.todolist} liuyan1={this.liuyan}/>
        <Content todolist={this.state.todolist} liuyan1={this.liuyan}/>
        <Footer/>
      </div>
    );
  }
} 

export default index;