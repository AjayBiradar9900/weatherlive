import React, { useEffect, useState } from "react";
import "./style.css";

// get the locastorage  data back
const getLocalData =()=>{
  const lists = localStorage.getItem("mytodolist");
  if(lists){
    return JSON.parse(lists);
  }else{
    return [];
  }
}

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [iseditItem,setIsEditItem]  =  useState("");
  const [toggelButton,setToggeleButton] = useState(false);


  // add the itesm  by clicking  plus
  const addItem = () => {
    if (!inputData) {
      alert("plese fill the data");
    }else if(inputData && toggelButton){
      setItems(
        items.map((curElem)=>{
            if(curElem.id===iseditItem){
              return {...curElem,name:inputData};
            }
            return curElem;
        })
      );
      setInputData("");
      setIsEditItem(null);
      setToggeleButton(false);
    }
     else {
      const myNewInputData ={
        id:new Date().getTime().toString(),
        name:inputData,
      }
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  // edit  the  items which is you want
  const editItem =(index)=>{
    const item_todo_edited = items.find((curElem)=>{
      return curElem.id === index;
    });
    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggeleButton(true);
    }

  // delete item
  const deleteItem =(index)=>{
    const updatedItems = items.filter((curElem)=>{
      return curElem.id !== index;
    });
    setItems(updatedItems);
  }
//  remove all elements
const removeAll = ()=>{
  setItems([]);
}
// adding localStore
useEffect(()=>{
  localStorage.setItem("mytodolist",JSON.stringify(items))
},[items])


  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todoLogo" srcset="" />
            <figcaption>Add Your List Here📝</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items✍️"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            ></input>

            {toggelButton ? (<i className="far fa-edit add-btn" onClick={addItem}></i>) :(<i className="fa fa-plus add-btn" onClick={addItem}></i>)  }
            
          </div>
          {/* show your items */}

          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
