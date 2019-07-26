import { CHANGE_INPUT_VAL, ADD_INPUT_VAL, DELETE_ITEM } from './actionTypes';

const defaultState = {
  list:[],
  value:''
};

export default (state = defaultState, action) => {
  // switch(action.type){
  //   case CHANGE_INPUT_VAL:
  //     const newState = JSON.parse(JSON.stringify(state));
  //     newState.value = action.value;
  //     return newState;

  //     case ADD_INPUT_VAL:
  //       const newState = JSON.parse(JSON.stringify(state));
  //       newState.list.push(newState.value);
  //       newState.value = '';
  //       return newState;
        
  //     case DELETE_ITEM:
  //       const newState = JSON.parse(JSON.stringify(state));
  //       const index = action.index;
  //       newState.list.splice(index,1);
  //       return newState;

  //     default:
  //       return state;
  // }

  if (action.type === CHANGE_INPUT_VAL) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.value = action.value;
    return newState;
  }

  if (action.type === ADD_INPUT_VAL) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.value);
    newState.value = '';
    return newState;
  }

  if (action.type === DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    const index = action.index;
    newState.list.splice(index,1);
    return newState;
  }

  return state;
}