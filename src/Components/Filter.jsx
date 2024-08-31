import { useState } from 'react';
import { Button } from 'flowbite-react';

// eslint-disable-next-line react/prop-types
const FilterComponent = ({ onFilter }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    onFilter(category); // Call the parent component's handler
  };

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => handleFilterChange('saving')}
        className={`${
          activeFilter === 'saving' ? 'bg-green-500 text-white' : 'bg-gray-200'
        }`}
      >
        Saving Funds
      </Button>
      
      <Button
        onClick={() => handleFilterChange('splitting')}
        className={`${
          activeFilter === 'splitting' ? 'bg-green-500 text-white' : 'bg-gray-200'
        }`}
      >
        Expense Splitting
      </Button>
    </div>
  );
};

export default FilterComponent;
