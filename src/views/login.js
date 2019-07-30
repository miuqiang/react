import React ,{Component} from 'react';
import { connect } from 'react-redux';

class Login extends Component {
 
  componentDidMount() {
    
  }

  render() {
    return(
      <div className="login">
        login
      </div>
    ) 
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatch1: () => {
    //   dispatch(actionCreator)
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)