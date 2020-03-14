import React from 'react'

export default function HeaderButtons() {
  return (
    <div className="header-buttons">
      <div className="header-button header-button--active">
        Vajan abi
        <div className="header-border" />
      </div>
      <div className="header-button">
        Pakun abi
        <div className="header-border" />
      </div>
    </div>
  );
}
