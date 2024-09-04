import { useState } from "react";

const MultiSelectSearch = ({ selectedUsers, setSelectedUsers }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Sample list of user names
  const userNames = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "David Wilson",
    "Emma Thomas",
    "Frank Wright",
    "Grace Lee",
    "Hannah Green",
    "Ivy Clark",
    "Jack Robinson",
    "Karen Harris",
    "Leo Edwards",
    "Mia Turner",
    "Noah King",
    "Olivia Scott",
    "Paul Evans",
    "Quinn Adams",
    "Ruby Collins",
    "Sam Brooks",
    "Tina Walker",
    "Uma Price",
    "Victor Mitchell",
    "Wendy Hayes",
    "Xander Fisher",
    "Yara Powell",
    "Zane Carter",
  ];
  

  // Handle input change and filter suggestions
  const handleInputChange = (event) => {
    const input = event.target.value;
    setQuery(input);

    if (input.length > 0) {
      const filteredSuggestions = userNames.filter((name) =>
        name.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle selection from the dropdown
  const handleSelect = (name) => {
    if (!selectedUsers.includes(name)) {
      setSelectedUsers([...selectedUsers, name]);
    }
    setQuery(""); // Clear the input field after selection
    setSuggestions([]); // Clear the suggestions
  };

  // Handle removing a selected user
  const handleRemove = (name) => {
    setSelectedUsers(selectedUsers.filter((user) => user !== name));
  };

  return (
    <div className="relative w-full max-w-md mx-auto mt-2">
      <label htmlFor="search" className="block text-sm font-medium text-black">
        Add Users to Group
      </label>
      <input
        type="text"
        id="search"
        value={query}
        onChange={handleInputChange}
        className="block w-full px-4 py-2 mt-1 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Start typing a name..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((name, index) => (
            <li
              key={index}
              onClick={() => handleSelect(name)}
              className="text-black px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
            >
              {name}
            </li>
          ))}
        </ul>
      )}

      {selectedUsers.length > 0 && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Selected Users:</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedUsers.map((name, index) => (
              <div key={index} className="flex items-center bg-blue-500 text-black px-3 py-1 rounded-full">
                <span>{name}</span>
                <button
                  onClick={() => handleRemove(name)}
                  className="ml-2 text-sm text-black bg-transparent rounded-full focus:outline-none hover:text-red-400"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectSearch;
