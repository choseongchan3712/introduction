import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const useLocationContext = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (itemName) => setSelectedItem(itemName);
  const deselectItem = () => setSelectedItem(null);

  return (
    <LocationContext.Provider
      value={{ selectedItem, selectItem, deselectItem }}
    >
      {children}
    </LocationContext.Provider>
  );
};
