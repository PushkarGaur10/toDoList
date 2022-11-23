import React, { useState } from "react";

function ToDoItem(props) {
  const[isDone,setIsdone]=useState(false);

  function handleClick(){
    setIsdone(prevValue=>{
      return !prevValue;
    });
  }

  return (
    <div className="listdiv" >
      <li onClick={handleClick}
       style={{textDecoration:isDone ? "line-through" : "none"}}>{props.text}</li>
      <button onClick={()=>{
        props.onChecked(props.id);
        }}>X</button>
    </div>
  );
}
export default ToDoItem;