import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const AppContextProvider = props => {
  const [allLists, setAllLists] = useState([]);

  const addList = list => {
    setAllLists(prevAllList => [...prevAllList, list]);
  };

  return (
    <AppContext.Provider
      value={{
        allLists,
        setAllLists,
        addList,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
