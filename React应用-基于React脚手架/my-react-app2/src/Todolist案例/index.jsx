//rfc 函数组件快捷键  rcc 类式组件快捷键
import React, { Component } from 'react';
import Content from './Content';
import Header from './Header'
import Footer from './Footer'
class index extends Component {
  render() {
    return (
      <div className='d1'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default index;