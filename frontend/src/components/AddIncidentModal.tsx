import React, { useState } from "react";

type AddIncidentModalProps = {
  show: boolean;
  onClose: () => void;
  onSubmit: (incident: { name: string; description: string; category: string }) => void;
};

const AddIncidentModal: React.FC<AddIncidentModalProps> = ({ show, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  if (!show) return null; // Do not render if show is false

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass the new incident data to the parent component
    onSubmit({ name, description, category });
    // Reset fields
    setName("");
    setDescription("");
    setCategory("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-[#2c2535] rounded-lg shadow-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-white mb-4">Add New Incident</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="incident-name">
              Name
            </label>
            <input
              id="incident-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-[#3b354c] text-white"
              required
            />
          </div>
          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="incident-desc">
              Description
            </label>
            <textarea
              id="incident-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded bg-[#3b354c] text-white"
              rows={3}
              required
            />
          </div>
          {/* Category Input */}
          <div>
            <label className="block text-sm font-medium text-white mb-1" htmlFor="incident-category">
              Category
            </label>
            <input
              id="incident-category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 rounded bg-[#3b354c] text-white"
              required
            />
          </div>
          {/* Action Buttons */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-[#6a5acd] text-white hover:bg-[#5a4eb3] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncidentModal;
