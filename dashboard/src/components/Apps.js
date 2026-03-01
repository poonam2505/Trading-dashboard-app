import React from "react";
import Dashboard from "./Dashboard";
import { GeneralContextProvider } from "./GeneralContext";

function App() {
  return (
    <GeneralContextProvider>
      <Dashboard />
    </GeneralContextProvider>
  );
}

export default App;