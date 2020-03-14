import React from 'react';

export default function HomePage() {
  return (
    <div className="banner">
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

      <div className="call-to-action">
        62 inimest sinu piirkonnas on valmis abistama
      </div>

      <div className="action-button">
        <div class="input-with-icon">
          <input type="text" class="input input-with-icon__input" />
          <div class="material-icons input-with-icon__icon">
            arrow_forward
          </div>
        </div>
      </div>
    </div>
  );
}
