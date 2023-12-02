import React from "react";
import { Map } from "pigeon-maps";

const ScooterMap = () => {
  const position = [63.096, 21.615];

  return <Map defaultCenter={position} defaultZoom={13}></Map>;
};

export default ScooterMap;
