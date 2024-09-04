import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GroupsContext } from "../contexts/GroupsContext";

const GroupGoalsPage = () => {
  const { id } = useParams(); // Use group name or ID to find the group
  const { groups, updateGroup } = useContext(GroupsContext);
  const group = groups.find((group) => group.name === id);

  const [goalData, setGoalData] = useState({
    goalName: "",
    amount: "",
    goalType: "savings", // savings or expenses
  });

  const handleGoalChange = (e) => {
    const { name, value } = e.target;
    setGoalData({ ...goalData, [name]: value });
  };

  const handleGoalSubmit = (e) => {
    e.preventDefault();
    const updatedGroup = {
      ...group,
      goals: [...(group.goals || []), goalData],
    };
    updateGroup(group.name, updatedGroup);
    setGoalData({ goalName: "", amount: "", goalType: "savings" });
    alert("Goal added successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 text-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Goal to {group.name}</h2>
      <form onSubmit={handleGoalSubmit}>
        <div className="mb-5">
          <label htmlFor="goalName" className="block mb-2 text-sm font-medium text-gray-100">
            Goal Name
          </label>
          <input
            type="text"
            id="goalName"
            name="goalName"
            value={goalData.goalName}
            onChange={handleGoalChange}
            className="bg-gray-700 border border-gray-600 text-sm rounded-lg block w-full p-2.5"
            placeholder="Goal name"
            required
          />
        </div>

        <div className="mb-5">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-100">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={goalData.amount}
            onChange={handleGoalChange}
            className="bg-gray-700 border border-gray-600 text-sm rounded-lg block w-full p-2.5"
            placeholder="Amount"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-100">Goal Type</label>
          <select
            name="goalType"
            value={goalData.goalType}
            onChange={handleGoalChange}
            className="bg-gray-700 border border-gray-600 text-sm rounded-lg block w-full p-2.5"
          >
            <option value="savings">Savings</option>
            <option value="expenses">Expenses</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full"
        >
          Add Goal
        </button>
      </form>

      {group.goals && group.goals.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Existing Goals:</h3>
          <ul>
            {group.goals.map((goal, index) => (
              <li key={index} className="mb-2">
                <span className="font-bold">{goal.goalName}</span> - Ksh {goal.amount} ({goal.goalType})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GroupGoalsPage;
