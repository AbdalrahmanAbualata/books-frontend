import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <button onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</button>
  );
}

export default LogoutButton;


// using class .
// import React, { Component } from "react";
// import { withAuth0 } from "@auth0/auth0-react";

// class LogoutButton extends Component {
//   render() {
//     return (
//       <button
//         onClick={() =>
//           this.props.auth0.logout({ returnTo: window.location.origin })
//         }
//       >
//         Log Out
//       </button>
//     );
//   }
// }

// export default withAuth0(LogoutButton);