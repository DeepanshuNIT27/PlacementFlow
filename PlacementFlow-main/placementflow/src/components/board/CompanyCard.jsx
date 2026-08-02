import { memo, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

import { PlacementContext } from "../../context/PlacementContext";
import ConfirmModal from "../ui/ConfirmModal";

function CompanyCard({ companyData }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(PlacementContext);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const priorityClasses = {
    High: "bg-red-500/10 text-red-400",
    Medium: "bg-yellow-500/10 text-yellow-400",
    Low: "bg-green-500/10 text-green-400",
  };

  const { id, company, role, packageLPA, deadline, priority, status } =
    companyData;

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: {
        company: companyData,
        status,
      },
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/company/edit/${id}`);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    dispatch({
      type: "DELETE_COMPANY",
      payload: id,
    });

    toast.success("Company deleted successfully");

    setShowDeleteModal(false);
  };

  return (
    <>
      <ConfirmModal
        isOpen={showDeleteModal}
        title="Delete Company?"
        message={`Are you sure you want to delete "${company}"?`}
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <div
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
        className={`group cursor-grab rounded-xl border border-slate-800 bg-slate-950 p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 ${
          isDragging
            ? "scale-[1.02] opacity-70 shadow-2xl ring-2 ring-blue-500/30"
            : ""
        }`}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{company}</h3>

            <p className="mt-1 text-sm text-slate-400">{role}</p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                priorityClasses[priority]
              }`}
            >
              {priority}
            </span>

            <button
              type="button"
              onClick={handleEdit}
              className="rounded-md p-1.5 text-slate-400 transition-all duration-200 hover:scale-110 hover:bg-slate-800 hover:text-blue-400"
            >
              <FiEdit2 size={16} />
            </button>

            <button
              type="button"
              onClick={handleDeleteClick}
              className="rounded-md p-1.5 text-slate-400 transition-all duration-200 hover:scale-110 hover:bg-slate-800 hover:text-red-400"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Package
          </p>

          <p className="mt-1 font-semibold text-blue-400">{packageLPA}</p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
          <span className="text-sm text-slate-400">Deadline</span>

          <span className="text-sm font-medium text-white">{deadline}</span>
        </div>
      </div>
    </>
  );
}

export default memo(CompanyCard);
