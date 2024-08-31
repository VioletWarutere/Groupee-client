import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import GroupForm from "./GroupForm";

const AddGroup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Modal Button */}
      <Button
        onClick={openModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Group
      </Button>
      
      {/* Main Modal */}
      <Modal show={isOpen} onClose={closeModal}>
        <Modal.Header>
          <h3 className="p-4">Create Group</h3>
        </Modal.Header>
        <Modal.Body>
          <GroupForm closeModal={closeModal} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddGroup;
