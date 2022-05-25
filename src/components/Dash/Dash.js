import React, { useState } from 'react';
import './Dash.css';
import Page from './Page';
import Side from './Side';

export default function Dash() {
  return (
    <div>
      <h1 className="text-center my-2">#Welcome</h1>
      <div className="d-flex justify-content-center">
        <Side />
        <Page />
      </div>
    </div>
  );
}
