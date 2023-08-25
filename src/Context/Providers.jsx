

import React from "react";
import { UserProvider } from "./UsersContext";
import { OpenProvider } from "./OpenContext";


function Providers({ children }) {
  return (
    <UserProvider>
      <OpenProvider>{children}</OpenProvider>
    </UserProvider>
  );
}

export default Providers;