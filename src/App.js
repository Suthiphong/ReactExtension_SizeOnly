import React from 'react';
import './App.css';

const data = async (item, size) => {
  item = JSON.parse(item)
  let nodeDataArray =  item.nodeDataArray.map(node => {
    let font = (node.font) ? size + "px" + " sans-serif" : ''
    return {
      ...node,
      font
    }
  })
  return {
    ...item,
    nodeDataArray
  }
}
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      old: '',
      new:'',
      size: 0

    }
  }

userClick = async () =>{
  let newData = await data(this.state.old,this.state.size)
  this.setState({
    new: newData
  })

}

render(){
  return (
    <div className="App">
      <input type="text" placeholder="font size" onChange={(e)=> this.setState({size: e.target.value})}/>
      <textarea placeholder="json" onChange={(even)=>this.setState({old: even.target.value})}/>
      <button onClick={this.userClick}>Renew</button>
      <textarea placeholder="json" value={JSON.stringify(this.state.new)}/>
    </div>
  );
}

}