import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// function User(props){
// return <h1>hello,{props.name}</h1>
// }
// function App(){
//   return (
//     <div>
//       <User name='a'/>
//       <User name='b'/>
//       <User name='c'/>
//       <User name='d'/>
//     </div>
//   )
// }

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count0:0,
      count1:0,
      count2:0,
      count3:0,
      count4:0
    }
  }
  render(){
    console.log('render')
    return (
      <div>
        <div>{this.state.count0}</div>
        <div>{this.state.count1}<button onClick={this.onPlus1.bind(this)}>plus1</button></div>
        <div>{this.state.count2}<button onClick={this.onPlus2.bind(this)}>plus2</button></div>
        <div>{this.state.count3}<button onClick={this.onPlus3.bind(this)}>plus3</button></div>
        <div>{this.state.count4}<button id="btn4">plus4</button></div>
      </div>
    )
  }
  componentDidMount(){
    this.setState({
      count0:this.state.count0 + 1
    })
    this.setState({
      count0:this.state.count0 + 1
    })
    document.querySelector('#btn4').onclick = ()=>{
      this.setState({
        count4:this.state.count4 + 1
      })
      this.setState({
        count4:this.state.count4 + 1
      })
  }
  }
  onPlus1(){
      this.setState({
        count1:this.state.count1 + 1
      })
      this.setState({
        count1:this.state.count1 + 1
      })
  }
  onPlus2(){
    this.setState(state => {
      return { count2:state.count2 + 1}
    })
    this.setState(state => {
      return {count2:state.count2 + 1}
    })
  }
  onPlus3(){
    setTimeout(()=>{
      this.setState({
        count3:this.state.count3 + 1
      })
      this.setState({
        count3:this.state.count3 + 1
      })
    })
  }

}
ReactDOM.render(
    <Counter />,
  document.getElementById('root')
);
