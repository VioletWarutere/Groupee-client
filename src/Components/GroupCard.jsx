import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const GroupCard = ({ GroupName, GroupDescription, amount, GroupMembers, id, image }) => {
  return (
    <div>
      <Card>
        <Link
          to={`/group/${id}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-[320px] p-2"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={image || "/docs/images/blog/image-4.jpg"}
            alt={GroupName}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {GroupName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {GroupDescription}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ${amount}
            </p>
            <div className="group-members">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Members: {GroupMembers.length}
              </span>
              {GroupMembers.map((member, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default GroupCard;
