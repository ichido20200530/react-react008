import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  input = '';

  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding: "5px",
  }

  constructor(props) {
    super(props);
    this.state = {
      message: 'type your name:'
    };
    this.doChange = this.doChange.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  render() {
    return <div>
      <h1>React</h1>
      <Message title="Children!">
        これはコンポーネント内のコンテンツです。
        マルでテキストを分割し、リストにして表示します。
        改行は必要ありません。
      </Message>
    </div>;
  }
}

class Message extends Component {
  li = {
    fontSize: "24pt",
    color: "#10",
    margin: "0px",
    padding: "0px",
  }

  render(){
    let content = this.props.children;
    let arr = content.split('。');
    let arr2 = [];
    for( let i = 0; i < arr.length; i++ ) {
      if ( arr[i].trim() !== '') {
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value,key) => (
      <li style={this.li} key={key}>{value}.</li>
    ));

    return <div>
      <h2>{this.props.title}</h2>
      <ol>{list}</ol>
    </div>
  }
}