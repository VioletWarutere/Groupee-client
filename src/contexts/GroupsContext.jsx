// src/contexts/GroupsContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups'));
    if (storedGroups) {
      setGroups(storedGroups);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  const addGroup = (group) => {
    setGroups((prevGroups) => [...prevGroups, group]);
  };

  const removeGroup = (groupId) => {
    setGroups((prevGroups) => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <GroupsContext.Provider value={{ groups, addGroup, removeGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
