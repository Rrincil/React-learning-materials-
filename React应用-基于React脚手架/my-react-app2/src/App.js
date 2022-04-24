
import './App.css';
//Es6中多种暴露方式 
import React,{Component} from 'react';
import Top from './components/Top/Top'
import Cotent from './components/Content/Cotent'
import Footer from './components/Footer'
class App extends Component{
  render(){
    return (
      <div>
        <Top />
        <Cotent/>
        <Footer/>
      </div>
    )
  }
}

export default App;
