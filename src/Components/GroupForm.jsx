import React, { useState, useContext } from "react";
import { GroupsContext } from "../contexts/GroupsContext";
import MultiSelectSearch from "./MultiSelectSearch";

const GroupForm = ({ closeModal }) => {
  const { addGroup } = useContext(GroupsContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    users: [],
    image: null,
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
    if (formData.name && formData.users.length > 0) {
      addGroup(formData);
      closeModal();
      alert("Group added successfully!");
    } else {
      alert("Please add at least a group name and one member.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-blue-500 rounded-lg shadow-lg">
      <div className="mb-5">
        <label htmlFor="groupName" className="block mb-2 text-sm font-medium text-white">
          Group Name
        </label>
        <input
          type="text"
          id="groupName"
          name="name"
          className="bg-gray-900 border border-gray-700 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="groupDescription" className="block mb-2 text-sm font-medium text-white">
          Group Description (Optional)
        </label>
        <input
          type="text"
          id="groupDescription"
          name="description"
          className="bg-gray-900 border border-gray-700 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={handleChange}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="groupImage" className="block mb-2 text-sm font-medium text-white">
          Group Image (Optional)
        </label>
        <input
          type="file"
          id="groupImage"
          className="block w-full text-sm text-gray-100 border border-gray-700 rounded-lg cursor-pointer bg-gray-900"
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
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
      >
        Submit
      </button>
    </form>
  );
};

export default GroupForm;
