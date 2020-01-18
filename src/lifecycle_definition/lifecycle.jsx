import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App2 extends Component {
  constructor(props) {
    console.log("props->",props);
    super(props);
    console.log(super(props));
    this.state = {name: props.val}
    // Don't call anything here, only setstate & bind this
    // Or in rare case, bind props to state here. Lift state up is normally easier.
    // [EXIT] If props comes from Redux, that's ok.
  }

  componentWillMount() {
    // This is the only lifecycle hook called on server rendering
    // If subscribe here, on server side will call it and never call unmuount >>> cause memory leak
    console.log('componentWillMount')
  }

  componentDidMount() {
    // instantiate the network request
    // subscribe (addEvent)
    console.log('componentDidMount')
  }
  
  componentWillReceiveProps(nextProps) {
    // update state
    console.log('componentWillReceiveProps nextProps:',nextProps)
    this.setState({name:nextProps.val});
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: ','prevProps:',prevProps, 'prevState:',prevState)
  }

  render() {
    console.log('render ', this.state.name)
    return <div>{this.state.name}</div>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Prop1'
    };

    setTimeout(()=>{
      this.setState({name:'Prop2'})
    },1000);
  }


  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <App2 val={this.state.name}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
