import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={c=>this.input1=c} />
        <span><button onClick = {this.add}>留言</button></span>

        {/* 留言板 */}
        <div>
          <ul>
            {
              this.state.mes.map((obj)=>{
                return <li key={obj.id}>{obj.mesg}  <button onClick={this.delete()}>删除</button> </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
