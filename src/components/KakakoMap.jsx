import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakakoMap(props) {
  console.log(props)
  return (
    <Map
      center={{ lat: props.lat, lng: props.lng }}
      style={{ width: "100%", height: "200px" }}
      level={4}
    >
      <MapMarker position={{ lat:props.lat, lng:  props.lng }} />
    </Map>
  );
}
