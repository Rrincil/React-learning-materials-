//Es6中多种暴露方式 默认暴露和分别暴露 统一暴露
import React,{Component} from 'react';
import './Top.css'
class Top extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'导航',
      ishot:true
    }
  }
  changehot = ()=>{
    const ishot = this.state.ishot
    this.setState({ishot:!ishot})
  }  
  render(){
    return (
      <div id='d1'>
       <span>{this.state.ishot?'炎热':'凉爽'}</span> {this.state.name}
       <button onClick={this.changehot}>换</button>

      </div>
    )
  }
}

export default Top;
