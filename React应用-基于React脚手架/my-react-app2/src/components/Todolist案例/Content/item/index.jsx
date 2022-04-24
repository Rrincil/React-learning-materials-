import React, { Component } from 'react'
import './Item.css'
export default class item extends Component {
  state = {
    liuyan :'liuyan',
    mouseenter:false
  }
  mouseenter = (flag,mos)=>{
    return ()=>{
      this.setState({liuyan:flag})
      this.setState({mouseenter:mos})
      // console.log(todolist);
    }
    
  }
  render() {
    const {todolist}= this.props

    return (
      <ul className='liuyanban'>
        <div className={this.state.liuyan} onMouseEnter={this.mouseenter('liuyan1',true)} onMouseLeave={this.mouseenter('liuyan',false)}>
          <label >
            <input type="checkbox" defaultChecked={todolist.done}/>
            <span>{todolist.name}</span>  
          </label> 
          <span className='delete' style={{display:this.state.mouseenter?'block':'none'}}>
            <button onClick={this.props.delete(todolist.id)} >删除</button>            
          </span>                      
        </div>
      </ul>
    )
  }
}
