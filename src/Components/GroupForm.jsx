//import React from 'react'
import { useState } from "react";
import MultiSelectSearch from "./MultiSelectSearch";

const GroupForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        amount: 0,
        users: []
      });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Trip with the girlsss"
          value={formData.name}
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
          id="GroupDescription"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        value={formData.description}
        onChange={handleChange}
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-start mb-5">
        
       <MultiSelectSearch value={formData.users} handleChange={handleChange}/>
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
