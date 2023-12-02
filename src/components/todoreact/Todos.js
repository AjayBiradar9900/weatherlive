import React, { useState } from "react";
import "./style.css";

const Todos = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputdata) {
      alert("plese fill the list");
    } else {
      const myNewInputData = {
        id:new Date().getTime().toString(),
        name:inputdata,
      }
    setItems([...items, myNewInputData]);
    setInputData("");
    }
    
  };
  const deleteItem =(index)=>{
      const updatedItems = items.filter((curElem)=>{
        return curElem.id !== index
      });
      setItems(updatedItems);
      
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure className="figure">
            <img src="./images/todo.svg" alt="Note here" />
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="add list"
              className="form-control"
              value={inputdata}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            <i className="fa fa-plus add-btn" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                  </div>
                </div>
              );
            })}
            
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Todos;
