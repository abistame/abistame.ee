import React from 'react'
import HeaderButtons from './HeaderButtons'
import history from '../history'

export default function HomePage() {
  const nextStep = () => {
    history.push('/post/sms')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      nextStep()
    }
  }

  return (
    <div className="banner">
      <HeaderButtons />

      <div className="call-to-action">
        62 inimest sinu piirkonnas on valmis abistama
      </div>

      <div className="action-button">
        <div class="input-with-icon">
          <input type="text" class="input input-with-icon__input" placeholder="Telefoni number" onKeyDown={handleKeyDown} />
          <div class="material-icons input-with-icon__icon" onClick={nextStep}>
            arrow_forward
          </div>
        </div>
      </div>
    </div>
  );
}
