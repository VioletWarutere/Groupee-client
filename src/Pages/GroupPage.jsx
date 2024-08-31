import React from "react";
import { Button, Card, Modal, Progress, Badge } from "flowbite-react";
import { FaCcApplePay, FaStripeS } from "react-icons/fa";
import { AiOutlineWallet } from "react-icons/ai";

const GroupDetailView = ({ group }) => {
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

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
            src="https://via.placeholder.com/150"
            alt="Group"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
          <div className="ml-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {group.name}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {group.description}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Members
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {group.members.map((member, index) => (
              <Badge
                key={index}
                color="blue"
                className="bg-blue-500 text-white px-3 py-1 rounded-full"
              >
                {member}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Payment Details
          </h3>
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
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Saving Progress
          </h3>
          <div className="flex items-center mt-2">
            <Progress
              color="blue"
              value={progressPercentage}
              className="w-full mr-4"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {`${group.savedAmount} / ${group.plannedAmount}`}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {`You have Ksh ${remainingAmount} left to save.`}
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
            Are you sure you want to delete this group? This action requires
            approval from all members.
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
