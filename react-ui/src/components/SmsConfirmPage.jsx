import React from 'react'
import HeaderButtons from './HeaderButtons'
import history from '../history'

export default function HomePage() {
  const nextStep = () => {
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      nextStep()
    }
  }

  return (
    <div className="banner">
      <HeaderButtons />

      <div className="call-to-action call-to-action--small">
        Jätkamiseks palun sisesta SMS'ga saadetud kood
      </div>

      <div className="action-button">
        <div class="input-with-icon">
          <input
            type="tel"
            class="input input-with-icon__input"
            placeholder="XXX-XXX"
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className="call-to-action call-to-action--small" onClick={nextStep}>
        Kinnita kood
        <span className="material-icons">arrow_forward</span>
      </div>
    </div>
  );
}
