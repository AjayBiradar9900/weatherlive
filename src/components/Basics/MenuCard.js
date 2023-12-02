import React from "react";

const MenuCard = ({ menuData }) => {
  // console.log(menuData)
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const {id,name,category,image,description} = curElem;

          return (
            <>
              <span className="card-container" key={id}>
                <span className="card" key={id}>
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{category}</h2>
                    <span className="card-description subtle">
                    {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                    <img src={image }alt="image" className="card-media"/>
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </span>
              </span>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
