import React, { Component } from 'react'
import './Content.css'
export default class index extends Component {

  delete = (obj)=>{
    const {todolist}  = this.props
    const todolist1 = todolist.splice(obj.id,1)
    console.log(todolist1)
    this.props.liuyan1(todolist1)
  }
  render() { 
    const {todolist} = this.props
    return (
      <ul className='liuyanban'>
        {/* 留言板 */}
        {
          todolist.map(obj=>{
            return(
              <div key={obj.id} className='liuyan'>
                <label >
                  <input type="checkbox" defaultChecked={obj.done}/>
                  <span>{obj.name}</span>
                </label>
                <span className='delete' > <button onClick={this.delete.bind(this,obj)}>删除</button>  </span>             
              </div>
            )
          })
        }

      </ul>
    )
  }
}