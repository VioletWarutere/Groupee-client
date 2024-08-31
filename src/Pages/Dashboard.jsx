import React, { useContext } from "react";
import { GroupsContext } from "../contexts/GroupsContext";
import GroupCard from "../Components/GroupCard";
import PaydWallet from "../Components/PaydWallet";
import Nav from "../Components/Nav";
import AddGroup from "../Components/AddGroup";

const Dashboard = () => {
  const { groups } = useContext(GroupsContext);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <Nav />
        <div className="p-6 space-y-6">
          <div className="flex flex-row justify-between p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-gray-50">
            <PaydWallet balance={3000.72} />
            <AddGroup />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <GroupCard
                  key={index}
                  GroupName={group.name}
                  GroupDescription={group.description}
                  amount={group.amount}
                  GroupMembers={group.users}
                  id={index}
                  image={group.image} // Pass the image here
                />
              ))
            ) : (
              <p className="text-black">
                No groups available. Create a new group to get started!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
