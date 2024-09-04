import React, { useContext, useState } from "react";
import { GroupsContext } from "../contexts/GroupsContext";
import GroupCard from "../Components/GroupCard";
import PaydWallet from "../Components/PaydWallet";
import Nav from "../Components/Nav";
import AddGroup from "../Components/AddGroup";

const Dashboard = () => {
  const { groups } = useContext(GroupsContext);
  const [filter, setFilter] = useState("all");

  // Filter the groups based on the selected filter
  const filteredGroups = groups.filter((group) => {
    if (filter === "savings") return group.accountType === "savings";
    if (filter === "expenses") return group.accountType === "expenses";
    return true; // Show all groups if filter is "all"
  });

  return (
    <div className="flex min-h-screen bg-gray-800 dark:bg-gray-900">
      <div className="flex-1 flex flex-col">
        <Nav />
        <div className="p-6 space-y-6">
          {/* Payd Wallet and Add Group Section */}
          <div className="flex flex-row gap-auto justify-evenly items-center p-6 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 bg-blue-400">
            <PaydWallet balance={3000.72} />
            <AddGroup />
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                filter === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                filter === "savings"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
              onClick={() => setFilter("savings")}
            >
              Savings
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                filter === "expenses"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              }`}
              onClick={() => setFilter("expenses")}
            >
              Expenses
            </button>
          </div>

          {/* Display Groups */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {filteredGroups.length > 0 ? (
    filteredGroups.map((group, index) => (
      <GroupCard
        key={index}
        GroupName={group.name}
        GroupDescription={group.description}
        amount={group.amount}
        GroupMembers={group.users}
        id={index}
        image={group.image} // Pass the image here
        className="h-full" // Make the card take the full height available
      />
    ))
  ) : (
    <p className="text-white text-center flex items-center w-[100%] justify-center align-center">
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
