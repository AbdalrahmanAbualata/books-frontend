import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const {isAuthenticated, loginWithRedirect,} = useAuth0();
  console.log(isAuthenticated);

  return !isAuthenticated && (
    <button onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;



// using class .
// import React, { Component } from "react";
// import { withAuth0 } from "@auth0/auth0-react";

// class LoginButton extends Component {
//   render() {
//     return (
//       <button onClick={() => this.props.auth0.loginWithRedirect()}>
//         Log In
//       </button>
//     );
//   }
// }

// export default withAuth0(LoginButton);