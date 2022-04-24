import React, { Component } from 'react';

class index extends Component {
  state = {
    item:[]
  }
  getitem = ()=>{
    const todolist = this.props.todolist
    console.log(todolist);
  }

  render() {
    
    return (
      <div>
        <button onClick={this.getitem}>获取</button>
        {/* {JSON.stringify(this.props.todolist)} */}
        {
        this.props.todolist.map(obj=>{
          return(
            <div key={obj.id}>
              <p>{obj.done?obj.name:''}</p>
            </div>

          )
        })
        }
      </div>
    );
  }
}

export default index; 