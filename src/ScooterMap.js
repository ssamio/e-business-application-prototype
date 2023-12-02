import React from "react";
import { Map, Marker } from "pigeon-maps";

const ScooterMap = () => {
  const position = [63.096, 21.615];

  return (
    <Map defaultCenter={position} defaultZoom={13}>
      <Marker anchor={position} color="green"></Marker>
      <Marker anchor={[63.09621, 21.61533]} color="green"></Marker>
      <Marker anchor={[63.096567, 21.615897]} color="green"></Marker>
      <Marker anchor={[63.096812, 21.615345345]} color="blue"></Marker>
      <Marker anchor={[63.0964234234, 21.615345345]} color="red"></Marker>
    </Map>
  );
};

export default ScooterMap;
