
import './App.css';
//Es6中多种暴露方式 
import React,{Component} from 'react';
import Top from './Top/Top'
import Cotent from './Content/Cotent'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'首页'
    }
  }
  render(){
    return (
      <div>
        <Top/>
        <Cotent/>
      </div>
    )
  }
}

export default App;
