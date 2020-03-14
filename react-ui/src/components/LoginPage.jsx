import React from 'react'

export default function LoginPage() {
  const handleClick = () => {
    var lockPasswordless = new window.Auth0LockPasswordless('7L6OpJUKfLroZvKYmz878z1hNdo4Q8bi', 'communityhelp1.eu.auth0.com/');
    lockPasswordless.show({
      passwordlessMethod: 'link'
    });
}

  return (
    <button onClick={handleClick}>Login</button>
  )
}
