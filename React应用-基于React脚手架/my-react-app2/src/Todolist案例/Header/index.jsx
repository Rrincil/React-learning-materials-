import React, { Component } from 'react'

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      mes:[{}]
    }
    // this.myref = React.createRef()
    this.beizhu = ()=>{
      // alert(this.myref.value)
      alert(this.input1.value)
    }
    this.add = ()=>{
      const {mes} = this.state
      const a = {id:mes.length+1, mesg:this.input1.value}
      this.setState({mes:[a,...mes]})
    }
    this.delete = (obj)=>{
      console.log(obj);
    }
  }
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
                return  <li key={obj.id}>{obj.mesg}  <button onClick={this.delete(obj)} key={obj.id}>删除</button> </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
