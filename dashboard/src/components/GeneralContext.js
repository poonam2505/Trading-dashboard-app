import React, { createContext, useState } from "react";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  return (
    <GeneralContext.Provider value={{ watchlist, setWatchlist }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
