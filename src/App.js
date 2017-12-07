import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';

class App extends Component {

  constructor(){
    super();
    this.state = {
      text: null,
      city: null,
      ip: null,
      country: null,
      region: null
    };
  }

  onClickingBtton(){
    this.setState({ text: ( "Geopgraphic location of " +this.refs.textBox.value) })  
    // alert(text +"!! You clicked NewBtton");
    var url = "http://localhost:8080/external?ipAddress=" + this.refs.textBox.value;
    Request.get(url).then((response) => {
      this.setState({
        ip: response.body.ip,
        city: response.body.city,
        country: response.body.country,
        region: response.body.regionName
      })
    });
  }

  // componentWillMount(){
  //   var url = "http://localhost:8080/external?ipAddress=208.80.152.201";
  //   Request.get(url).then((response) => {
  //     this.setState({
  //       ip: response.body.ip,
  //       city: response.body.city,
  //       country: response.body.country,
  //       region: response.body.regionName
  //     })
  //   });
  // }


  render() {

    return(
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome!! Find Geopgraphic location using ip address</h1>
          </header>
        
          <body>                      
            <br/>
            <input ref="textBox" type="text"></input>            
            <button onClick = { (e) => this.onClickingBtton() } > Enter </button>          
            <h2>{ this.state.text } </h2>            
            <ul>{ this.state.city}</ul>
            <ul>{ this.state.region}</ul>
            <ul>{this.state.country}</ul>          
          </body>
          
        </div>
      )
  }  
}

export default App;