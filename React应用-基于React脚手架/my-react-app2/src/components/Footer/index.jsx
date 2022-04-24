import React,{Component} from 'react'
import './index.css'
class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'底部'
    }
  }
  render(){
    return(
      <div className='Footer'>
        {this.state.name}
      </div>
    )
  }
}
export default Footer