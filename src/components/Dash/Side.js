import React, { useState } from 'react';
import './Dash.css';

export default function Side() {
  function SideItem(props) {
    return (
      <a href={props.url}>
        <div className=" d-flex align-items-center justify-content-between sideItem hover-zoom bg-image px-2 py-3 grow bg-dark text-white">
          <p className="m-0 p-0">{props.name}</p>
          <i className="fa fa-angle-right" />
        </div>
      </a>
    );
  }
  return (
    <div className="text-dark">
      <SideItem name="Ashok" />
      <SideItem name="Ashok" />
      <SideItem name="Ashok" />
      <SideItem name="Ashok" />
      <SideItem name="Ashok" />
      <SideItem name="Ashok" />
      Hello
    </div>
  );
}
