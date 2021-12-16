import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = (props) => {
  return (
    <div>
      {props.objects.map((object, index) => {
        return <Tile obj={object} key={index}/>
      })}
    </div>
  );
};
