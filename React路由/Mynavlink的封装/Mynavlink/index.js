import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
      // 封装自定义样式的 NavLink
      <NavLink activeclassName='demo' {...this.props}/>
    )
  }
}