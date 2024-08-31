//import React from 'react'
import GroupCard from "./GroupCard";

const Groups = () => {
    const groups = [
        {id: 1, name: 'Group 1', description: 'Description 1'},
        {id: 2, name: 'Group 2', description: 'Description 2'},
        {id: 3, name: 'Group 3', description: 'Description 3'},
        // Add more groups here
  
    ];
  return groups.map(group => { return (
        
        <GroupCard
        groupName={group.name} 
        groupDescription={group.description}
        key={group.id}
        amount={group.amount}
        members={group.members}
         />
  
    )})
  
}

export default Groups