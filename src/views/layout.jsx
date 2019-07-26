import React, { Component } from 'react';
import '../css/App.css';

import { Button } from 'antd';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.state = {
      msg: 'this is message!!',
      arr: ['a', 'b'],
      x:0,
      y:0
    };
  }

  handleClick = () => {
    this.setState(state => ({
      arr: [...state.arr, 'marklar'],
    }));
  }


  setTextInputRef = (element) => {
    this.textInput = element;
  }

  focusTextInput = () => {
    if (this.textInput) this.textInput.focus();
  }

  componentDidMount() {
    this.focusTextInput();
  }
  handleMouseMove = (e) =>{
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }
  handleRouter = () => {
    this.props.history.push('/login');
    // this.props.history.push({pathname:'/login',query:{name:'miaoqiang',age:31}});
  }

  render() {
    return (
      <div className="layout">
        <Button type="primary" onClick={this.handleClick}>Primary</Button>
        <Button type="primary" onClick={this.focusTextInput}>Focus</Button>
        <Button type="primary" onClick={this.handleRouter}>Focus</Button>
        <div>
          <ul>
            {
              this.state.arr.map((val,key) => 
                <li key={key}>{val}</li>
              )
            }
          </ul>
          <br/>
          <input
            type="text"
            ref={this.setTextInputRef}
            />
          <br/>
          <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
            <h1>移动鼠标!</h1>
            <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
          </div>
        </div>
      </div>
    )
  }
}