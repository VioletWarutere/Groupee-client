import { Link } from "react-router-dom";
import { Card } from "flowbite-react"; // Assuming you are using Flowbite for consistent UI components

const GroupCard = ({ GroupName, GroupDescription, image }) => {
  return (
    <div className="mb-4">
      <Card className="h-full bg-[#0077b6] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        <Link to={`/group/${encodeURIComponent(GroupName)}`} className="flex flex-col items-center">
          {/* Group Image */}
          <img
            className="object-cover w-full h-40 rounded-t-lg md:h-48 md:w-full md:rounded-none"
            src={image || "/images/placeholder.jpg"} // Placeholder if no image is provided
            alt={GroupName}
          />
          
          {/* Group Details */}
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h2 className="text-2xl font-bold text-white text-center mb-2">{GroupName}</h2>
            <p className="text-gray-200 mb-3 text-center">{GroupDescription || "No description available."}</p>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default GroupCard;
