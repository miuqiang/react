// 统一管理所有的creators
import { CHANGE_INPUT_VAL, ADD_INPUT_VAL, DELETE_ITEM } from "./actionTypes.js";

export const getInputValChangeAction = (value) => ({
  type: CHANGE_INPUT_VAL,
  value
});

export const handleSubmit = () => ({
  type: ADD_INPUT_VAL
});

export const handleDelete = (index) => ({
  type: DELETE_ITEM,
  index
});