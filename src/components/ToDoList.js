import React, { Component } from 'react';
import ToDoItemUi from './ToDoItemUi.jsx';
import store from '../store/index';
import { getInputValChangeAction, handleSubmit, handleDelete } from "../store/actionCreators.js";
export default class ToDoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <ToDoItemUi
        list={this.state.list}
        value={this.state.value}
        handleChange={this.handleChange}
        handleEnter={this.handleEnter}
        handleClick={this.handleClick}
        handleDelete={this.handleDelete}
      />
    )
  }

  componentDidMount() {
    console.log('1')
  }

  handleClick = () => {
    if (!this.state.value) return;
    const action = handleSubmit();
    store.dispatch(action);
  }

  handleChange = (e) => {
    const action = getInputValChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleDelete = (index) => {
    const action = handleDelete(index);
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
