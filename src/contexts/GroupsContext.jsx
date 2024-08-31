import React, { createContext, useState, useEffect } from "react";

export const GroupsContext = createContext();

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

  const updateGroup = (index, updatedGroup) => {
    const updatedGroups = [...groups];
    updatedGroups[index] = updatedGroup;
    setGroups(updatedGroups);
  };

  return (
    <GroupsContext.Provider value={{ groups, addGroup, updateGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
