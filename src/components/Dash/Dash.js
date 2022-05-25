import React, { useState } from 'react';
import './Dash.css';
import Page from './Page';
import Side from './Side';
export default function Dash() {
  return (
    <div className="d-flex justify-content-center">
      <Page />
      <Side />
    </div>
  );
}
