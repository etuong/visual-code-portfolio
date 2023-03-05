import React, { useEffect } from "react";

const ExplorerContext = React.createContext();

const ExplorerProvider = (children) => {
  const [explorerItems, setExplorerItems] = React.useState([]);

  const value = { explorerItems, setExplorerItems };

  return <ExplorerContext.Provider value={value} {...children} />;
};

export { ExplorerContext, ExplorerProvider };
