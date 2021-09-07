//Es6中多种暴露方式 
import React,{Component} from 'react';
class Cotent extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'内容'
    }
  }
  render(){
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}

export default Cotent;
