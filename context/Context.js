"use client";
import { createContext, useState } from "react";

export const Context = createContext(null);
function GlobalState({ children }) {
  const [searchPicGlobal, setSearchPicGlobal] = useState();

  return (
    <Context.Provider value={{ searchPicGlobal, setSearchPicGlobal }}>
      {children}
    </Context.Provider>
  );
}

export default GlobalState;
