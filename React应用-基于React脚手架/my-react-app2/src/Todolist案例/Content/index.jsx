import React, { Component } from 'react'
import './Content.css'
export default class index extends Component {
  state = {
    liuyan :'liuyan',
    liuyan2:"liuyan2",
    mouse:false
  }
  delete = (obj)=>{
    console.log(obj);
    const {todolist}  = this.props
    const todolist1 = todolist.splice(obj.id,1)
    console.log(todolist1)
    this.props.liuyan1(todolist1)
  }
  // gaoliang = ()=>{
  //   const liuyan2 = 'liuyan1'
  //   this.setState({liuyan2:liuyan2})
  // }
  // lostgaoliang = ()=>{
  //   const liuyan2 = "liuyan2"
  //   this.setState({liuyan2:liuyan2})
  // }
  mouseenter = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  render() { 
    const {todolist} = this.props
    return (
      <ul className='liuyanban'>
        {/* 留言板 */}
        {
          todolist.map(obj=>{
            return(
              <div key={obj.id} className={this.state.liuyan} >
                <div className={this.state.liuyan2} onMouseEnter={this.mouseenter(true)} onMouseLeave={this.mouseenter(false)}>
                  <label >
                    <input type="checkbox" defaultChecked={obj.done}/>
                    <span>{obj.name}</span>
                  </label>
                  <span className='delete' > <button onClick={this.delete.bind(this,obj)}>删除</button>  </span>             
                </div>
              </div>
            )
          })
        }

      </ul>
    )
  }
}