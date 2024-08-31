import React, { useState, useContext } from "react";
import { GroupsContext } from "../contexts/GroupsContext";
import MultiSelectSearch from "./MultiSelectSearch";

const GroupForm = ({ closeModal }) => {
  const { addGroup } = useContext(GroupsContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: 0,
    accountType: "savings", // Default account type
    users: [], // Array to store the selected users
    image: null, // Placeholder for image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGroup(formData);
    closeModal(); // Close the modal after submission
    alert("Success! Group added.");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="groupName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Group Name
        </label>
        <input
          type="text"
          id="groupName"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Trip with the girlsss"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="groupDescription"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Group Description
        </label>
        <input
          type="text"
          id="groupDescription"
          name="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Amount To Split
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Account Type
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center text-black">
            <input
              type="radio"
              name="accountType"
              value="savings"
              checked={formData.accountType === "savings"}
              onChange={handleChange}
              className="mr-2"
            />
            Savings Goal
          </label>
          <label className="flex items-center text-black">
            <input
              type="radio"
              name="accountType"
              value="expenses"
              checked={formData.accountType === "expenses"}
              onChange={handleChange}
              className="mr-2"
            />
            Expense Splitting
          </label>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="groupImage"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Group Image
        </label>
        <input
          type="file"
          id="groupImage"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
      <div className="mb-5">
        <MultiSelectSearch
          selectedUsers={formData.users}
          setSelectedUsers={(users) => setFormData({ ...formData, users })}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default GroupForm;
