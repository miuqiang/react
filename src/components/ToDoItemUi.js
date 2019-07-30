import React from 'react'
import { Input, Button, List } from 'antd';

const ToDoItemUi = (props)=> {
  return (
    <div style={{ width: '500px', margin: '0 auto' }}>
      <Input 
        placeholder="Basic usage" 
        onChange={props.handleChange} 
        onKeyUp={props.handleEnter} 
        value={props.value}/>
      <Button 
        type="primary" 
        block 
        onClick={props.handleClick}>提交</Button>
      
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => { props.handleDelete(index) }}>{item}</List.Item>)}
      />
    </div>
  )
}
export default ToDoItemUi;
