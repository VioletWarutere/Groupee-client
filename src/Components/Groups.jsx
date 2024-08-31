//import React from 'react';
import GroupCard from './GroupCard';
import groupData from '../data/groupData';

const Groups = () => {

    const groups = groupData;
  // Array of groups
  

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
        
      {groups.map((group) => (
        <GroupCard
          key={group.id}
          groupName={group.name}
          groupDescription={group.description}
          amount={group.amount}
          groupMembers={group.members}
        />
      ))}
    </div>
  );
};

export default Groups;
