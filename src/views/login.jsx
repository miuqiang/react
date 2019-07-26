import React ,{Component} from 'react';
import ToDoLsit from '../components/ToDoList';

export default class Layout extends Component {
 
  componentDidMount() {
    
  }

  render() {
    return(
      <div className="login">
        <ToDoLsit />
      </div>
    ) 
  }
}