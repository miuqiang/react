import React ,{Component} from 'react';
import ToDoLsit from '../components/ToDoList';

export default class Layout extends Component {
 
  componentDidMount() {
    console.log(this.props.match.params.name);
  }

  render() {
    return(
      <div className="login">
        <ToDoLsit />
      </div>
    ) 
  }
}