import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GroupsContext } from "../contexts/GroupsContext";
import { Button, Card, Badge } from "flowbite-react"; // Assuming Flowbite for consistent UI

const GroupDetailView = () => {
  const { name } = useParams(); // Getting the group name from the URL
  const { groups, updateGroup } = useContext(GroupsContext);
  const group = groups.find((group) => group.name === name); // Finding the group by name

  const [newMember, setNewMember] = useState("");
  const [newGoal, setNewGoal] = useState("");

  if (!group) {
    return <p className="text-center text-red-600">Group not found</p>;
  }

  // Function to handle adding a new member
  const handleAddMember = () => {
    if (newMember) {
      const updatedGroup = {
        ...group,
        users: [...group.users, newMember],
      };
      updateGroup(group.name, updatedGroup);
      setNewMember(""); // Clear input after adding
    }
  };

  // Function to handle creating a new goal
  const handleAddGoal = () => {
    if (newGoal) {
      alert(`New goal created: ${newGoal}`); // Placeholder action for adding a goal
      setNewGoal(""); // Clear input after adding
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-0 min-h-[100vh] p-6 ">
      <Card className="bg-gray-800 dark:bg-gray-900 shadow-lg p-6 rounded-lg min-h-[100%]">
        <div className="flex items-center mb-6">
          <img
            src={group.image || "/images/placeholder.jpg"}
            alt={group.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
          <div className="ml-6">
            <h2 className="text-3xl font-bold text-white">{group.name}</h2>
            <p className="mt-2 text-gray-400">{group.description || "No description available."}</p>
          </div>
        </div>

        {/* Group Members Section */}
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-200">Members</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {group.users.length > 0 ? (
              group.users.map((member, index) => (
                <Badge key={index} color="blue" className="bg-blue-500 text-white px-3 py-1 rounded-full">
                  {member}
                </Badge>
              ))
            ) : (
              <p className="text-gray-400">No members yet</p>
            )}
          </div>

          {/* Add Member Input */}
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Add new member"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <Button onClick={handleAddMember} className="ml-2 bg-blue-600 hover:bg-blue-700">
              Add Member
            </Button>
          </div>
        </div>

        {/* Create Goal Section */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-200">Create a Goal</h3>
          <div className="mt-2 flex">
            <input
              type="text"
              placeholder="Enter new goal"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <Button onClick={handleAddGoal} className="ml-2 bg-blue-600 hover:bg-blue-700">
              Add Goal
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GroupDetailView;
