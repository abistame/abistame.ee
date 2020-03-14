import React from 'react'
import HeaderButtons from './HeaderButtons'

export default function HomePage() {
  return (
    <div className="banner">
      <HeaderButtons />

      <div className="call-to-action">
        62 inimest sinu piirkonnas on valmis abistama
      </div>

      <div className="action-button">
        <div class="input-with-icon">
          <input type="text" class="input input-with-icon__input" placeholder="Telefoni number" />
          <div class="material-icons input-with-icon__icon">
            arrow_forward
          </div>
        </div>
      </div>
    </div>
  );
}
