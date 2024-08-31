/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button, Card, Modal, Progress, Badge } from "flowbite-react";
import { FaCcApplePay, FaStripeS } from "react-icons/fa";
import { AiOutlineWallet } from "react-icons/ai";

const GroupDetailView = () => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  // Dummy data for the "Tech Skills Workshop" group
  const group = {
    name: "Tech Skills Workshop",
    description: "A workshop to learn advanced technical skills in software development.",
    members: ["Jane Doe"],
    plannedAmount: 300, // Total amount planned to save (in euros, for simplicity)
    savedAmount: 100, // Amount already saved (in euros, for simplicity)
  };

  // Calculate the progress
  const progressPercentage = (group.savedAmount / group.plannedAmount) * 100;
  const remainingAmount = group.plannedAmount - group.savedAmount;

  // Toggle delete modal
  const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <Card className="bg-blue-50 shadow-md rounded-lg border border-gray-200">
        <div className="flex items-center">
          <img
            src="data:image/jpeg;base64,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"
            alt="Group"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
          <div className="ml-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{group.name}</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">{group.description}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Members</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {group.members.map((member, index) => (
              <Badge key={index} color="blue" className="bg-blue-500 text-white px-3 py-1 rounded-full">
                {member}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Payment Details</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Add bank account details, Paybill, or Till number.
          </p>
          <input
            type="text"
            placeholder="e.g., Paybill: 123456"
            className="mt-2 block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          />
          <div className="mt-4 flex gap-4">
            <Button color="gray" className="flex items-center gap-2">
              <AiOutlineWallet />
              Lipa na Mpesa
            </Button>
            <Button color="gray" className="flex items-center gap-2">
              <FaCcApplePay />
              Apple Pay
            </Button>
            <Button color="gray" className="flex items-center gap-2">
              <FaStripeS />
              Stripe
            </Button>
            <Button color="gray" className="flex items-center gap-2">
              Payd
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Saving Progress</h3>
          <div className="flex items-center mt-2">
            <Progress color="blue" value={progressPercentage} className="w-full mr-4" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {`${group.savedAmount} / ${group.plannedAmount} EUR`}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {`You have €${remainingAmount} left to save.`}
          </p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Button className="bg-green-600">Pay</Button>
          <Button className="bg-red-700">Withdraw</Button>
          <Button color="gray" onClick={toggleDeleteModal}>
            Delete Group
          </Button>
        </div>

        <p className="mt-6 text-sm italic text-center text-gray-600 dark:text-gray-400">
          "Saving together makes the journey shorter and the memories sweeter."
        </p>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onClose={toggleDeleteModal}>
        <Modal.Header>Delete Group</Modal.Header>
        <Modal.Body>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Are you sure you want to delete this group? This action requires approval from all members.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={toggleDeleteModal}>
            Cancel
          </Button>
          <Button color="red">Request Deletion Approval</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GroupDetailView;
