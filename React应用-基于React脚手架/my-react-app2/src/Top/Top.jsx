//Es6中多种暴露方式 
import React,{Component} from 'react';
import './Top.css'
class Top extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'导航'
    }
  }
  render(){
    return (
      <div id='d1'>
        {this.state.name}
      </div>
    )
  }
}

export default Top;
