import React from "react";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <a href={item.link} target="_blank" className="image-data">
              <img src={item.image} alt="" />
            </a>
            <h5>{item.title}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
