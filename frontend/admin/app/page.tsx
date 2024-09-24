"use client";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useGlobalContext } from "@/context/GlobalContext";
import { tAlert, tAlertType } from "@/utils/types/Alert";
import { useState } from "react";

export default function Home() {
  const { addAlert } = useGlobalContext();
  const handleAddAlert = (title: string, message: string, type: tAlertType) => {
    const newAlert: tAlert = {
      title: title,
      message: message,
      buttonText: "X",
      iconName: "InformationCircleIcon",
      type: type,
      id: Math.random().toString(36).substring(2, 9),
    };
    addAlert(newAlert);
  };
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="flex items-start justify-items-start gap-8">
      {/* Alert Example */}
      <div className="flex flex-col items-center gap-2 border border-dashed border-2 rounded p-4">
        <h1>Alert</h1>
        <button className="btn w-full" onClick={() => handleAddAlert("Success", "Example Message", tAlertType.SUCCESS)}>Success Alert</button>
        <button className="btn w-full" onClick={() => handleAddAlert("Warning", "Example Message", tAlertType.WARNING)}>Warning Alert</button>
        <button className="btn w-full" onClick={() => handleAddAlert("Error", "Example Message", tAlertType.ERROR)}>Error Alert</button>
      </div>

      {/* Modal Example */}
      <div className="flex flex-col items-center gap-2 border border-dashed border-2 rounded p-4">
        <h1>Modal</h1>
        <div>
          <button className="btn" onClick={handleOpenModal}>
            Open Modal
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title="Hello!"
            actions={
              <>
                <Button onClick={handleCloseModal}>Submit</Button>
                <Button onClick={handleCloseModal}>Cancel</Button>
              </>
            }
          >
            <p>click the button below to close</p>
          </Modal>
        </div>
      </div>
          
      
    </div>
  );
}
