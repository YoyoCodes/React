import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I am a {props.name} person and I am {props.age} years old</p>

      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}

export default person;
