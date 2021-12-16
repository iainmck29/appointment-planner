import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {Object.values(props.obj).map((value, index) => {
        if (index === 0) {
          return <p className="tile-title">{value}</p>
        }
        return <p className="tile">{value}</p>
      })}
    </div>
  );
};
