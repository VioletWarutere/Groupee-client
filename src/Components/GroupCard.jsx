/* eslint-disable react/prop-types */
//import React from 'react'
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const GroupCard = ({groupName, groupDescription, amount, groupMembers, id}) => {
   /*  const GroupName = '';
    const GroupDescription = '';
    const amount = 0;
    const GroupMembers = [
        'Alice Johnson',
        'Emily Davis'
        
    ]; */
  return (
    <div>
      <Card>
        <Link
          to={`/group/`}
          className="flex flex-col items-center  border  rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          
          <div className="flex flex-col justify-between p-4 leading-normal max-w-screen-sm">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {groupName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             {groupDescription}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             {amount}
            </p>
            <div className="group-members">
                
  
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default GroupCard;
