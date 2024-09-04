import React, { createContext, useState, useEffect } from "react";

// Create the context
export const GroupsContext = createContext();

// Create the provider component
export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState(() => {
    const savedGroups = localStorage.getItem("groups");
    return savedGroups ? JSON.parse(savedGroups) : [];
  });

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const addGroup = (group) => {
    setGroups([...groups, group]);
  };

  const updateGroup = (groupName, updatedGroup) => {
    setGroups(groups.map((group) => (group.name === groupName ? updatedGroup : group)));
  };

  return (
    <GroupsContext.Provider value={{ groups, addGroup, updateGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
