import React, { Component } from 'react';
import ToDoItemUi from './ToDoItemUi';
import { getInputValChangeAction, handleSubmit, handleDelete } from "../store/actionCreators.js";

import { connect } from 'react-redux';
class ToDoList extends Component {

  render() {
    return (
      <ToDoItemUi
        list={this.props.list}
        value={this.props.value}
        handleChange={this.props.handleChange}
        handleEnter={this.props.handleEnter}
        handleClick={this.props.handleClick}
        handleDelete={this.props.handleDelete}
      />
    )
  }

  componentDidMount() {
    console.log('1')
  }
}

// 获取数据
const mapStateToProps = (state) => {
  return {
    list: state.list,
    value: state.value
  }
}

// 派发dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      const action = handleSubmit();
      dispatch(action);
    },

    handleChange(e) {
      const action = getInputValChangeAction(e.target.value);
      dispatch(action);
    },

    handleDelete(index) {
      const action = handleDelete(index);
      dispatch(action);
    },

    handleEnter(e) {
      if (e.keyCode === 13) {
        console.log(this)
        // handleClick();

        const action = handleSubmit();
        dispatch(action);
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
