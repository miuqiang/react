import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from '../store/index';
import { CHANGE_INPUT_VAL, ADD_INPUT_VAL, DELETE_ITEM } from '../store/actionTypes';


export default class ToDoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{ width: '500px', margin: '0 auto' }}>
        <Input placeholder="Basic usage" onChange={this.handleChange} onKeyUp={this.handleEnter} value={this.state.value} />
        <Button type="primary" block onClick={this.handleClick}>提交</Button>
        <br />
        <br />
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleDelete.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }

  handleClick = () => {
    if(!this.state.value) return;
    
    const action = {
      type: ADD_INPUT_VAL
    }

    store.dispatch(action);

  }

  handleChange = (e) => {
    const action = {
      type: CHANGE_INPUT_VAL,
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleDelete = (index) => {
    const action = {
      type: DELETE_ITEM,
      index
    }
    store.dispatch(action);
  }

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      this.handleClick();
    }
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  }
}
