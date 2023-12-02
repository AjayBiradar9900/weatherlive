import React, { useEffect, useState } from "react";

const getLocalData = () => {
  const lists = localStorage.getItem("myTodoItems");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo3 = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());

  //   Add Items
  const addItem = () => {
    if (!inputData) {
      alert("Plese fill the input list");
    } else {
      const myNewItem = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewItem]);
    }
    setInputData("");
  };

  // delte Items

  const deleteItem = (index) => {
    const updatedItesm = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItesm);
  };

  // storing itemss in local storage

  useEffect(() => {
    localStorage.setItem("myTodoItems", JSON.stringify(items));
  }, [items]);

  // Edit Item


  const editItem=(index)=>{
    return
  }

  return (
    <>
      <div className="main_block">
        <figure className="main">
          <img src="#" alt="Image phot0" />
          <figcaption>Plese enter the note below</figcaption>
        </figure>
        <div className="input">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button onClick={addItem}>Save</button>
        </div>
      </div>
      {/* show items */}
      {items.map((curElem) => {
        return (
          <>
            <div className="main_show_class">
              <span>{curElem.name}</span>
              <span>
                <button onClick={() => deleteItem(curElem.id)}>
                  deleteItem
                </button>
              </span>
              <span><button onClick={()=>editItem(curElem.id)}>Edit Item</button></span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Todo3;
