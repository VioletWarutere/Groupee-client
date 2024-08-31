/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GroupsContext } from "../contexts/GroupsContext";
import { Button, Card, Modal, Progress, Badge } from "flowbite-react";
import { FaCcApplePay, FaStripeS } from "react-icons/fa";
import { AiOutlineWallet } from "react-icons/ai";

const GroupDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { groups, setGroups } = useContext(GroupsContext);
  const group = groups[id];

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const [newMember, setNewMember] = useState("");

  if (!group) {
    return <p>Group not found</p>;
  }

  const progressPercentage = (group.amount / 10000) * 100; // Replace 10000 with the dynamic planned amount
  const remainingAmount = 10000 - group.amount; // Replace 10000 with the dynamic planned amount

  const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal);
  const toggleWithdrawModal = () => setShowWithdrawModal(!showWithdrawModal);

  const handleAddMember = () => {
    if (newMember) {
      const updatedGroups = [...groups];
      updatedGroups[id] = {
        ...group,
        users: [...group.users, newMember],
      };
      setGroups(updatedGroups);
      setNewMember("");
    }
  };

  const handleDeleteGroup = () => {
    const updatedGroups = groups.filter((_, index) => index !== parseInt(id));
    setGroups(updatedGroups);
    navigate("/home");
  };

  const handleWithdrawRequest = () => {
    if (withdrawAmount) {
      alert(`Withdrawal request of Ksh ${withdrawAmount} has been sent for approval.`);
      setWithdrawAmount("");
      toggleWithdrawModal();
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <Button color="gray" onClick={() => navigate("/home")} className="mb-4">
        Back
      </Button>
      <Card className="bg-blue-50 shadow-md rounded-lg border border-gray-200">
        <div className="flex items-center">
          <img
            src={group.image || "https://via.placeholder.com/150"}
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
            {group.users.map((member, index) => (
              <Badge key={index} color="blue" className="bg-blue-500 text-white px-3 py-1 rounded-full">
                {member}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              type="text"
              placeholder="Add new member"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              className="flex-1 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <Button color="blue" onClick={handleAddMember} className="ml-2">
              Add Member
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Payment Details</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Paybill: <span className="font-bold text-gray-800 dark:text-gray-200">123456</span>
          </p>
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
              {`${group.amount} / 10000`}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {`You have Ksh ${remainingAmount} left to save.`}
          </p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <Button color="green">Pay</Button>
          <Button color="red" onClick={toggleWithdrawModal}>
            Withdraw
          </Button>
          <Button color="gray" onClick={toggleDeleteModal}>
            Request Delete
          </Button>
          <Button color="red" onClick={handleDeleteGroup}>
            Delete Group (Admin)
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
          <Button color="orange" className="text-white" onClick={() => alert("Delete request sent for approval.")}>
            Request Deletion Approval
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Withdraw Request Modal */}
      <Modal show={showWithdrawModal} onClose={toggleWithdrawModal}>
        <Modal.Header>Request Withdrawal</Modal.Header>
        <Modal.Body>
          <input
            type="number"
            placeholder="Enter amount to withdraw"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={toggleWithdrawModal}>
            Cancel
          </Button>
          <Button color="green" className="text-white" onClick={handleWithdrawRequest}>
            Request Withdrawal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GroupDetailView;
