import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakakoMap(props) {
  // 새로고침시 지도가 안뜨는 문제 해결
  if(!props.lat || !props.lng) return null;

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
