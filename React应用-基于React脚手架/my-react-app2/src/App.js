
import './App.css';
//Es6中多种暴露方式 
import React,{Component} from 'react';
import Top from './Top/Top'
import Cotent from './Content/Cotent'
class App extends Component{
  render(){
    return (
      <div>
        <Top />
        <Cotent/>
      </div>
    )
  }
}

export default App;
