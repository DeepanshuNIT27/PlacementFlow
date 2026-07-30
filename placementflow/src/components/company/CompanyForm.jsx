import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { PlacementContext } from "../../context/PlacementContext";

function CompanyForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { companies, dispatch } = useContext(PlacementContext);

  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    packageLPA: "",
    deadline: "",
    priority: "Medium",
    status: "Wishlist",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isEditMode) return;

    const company = companies.find((item) => item.id === Number(id));

    if (company) {
      setFormData(company);
    }
  }, [id, companies, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!formData.packageLPA.trim()) {
      newErrors.packageLPA = "Package is required";
    }

    if (!formData.deadline) {
      newErrors.deadline = "Deadline is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateForm()) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    if (isEditMode) {
      dispatch({
        type: "UPDATE_COMPANY",
        payload: {
          id: Number(id),
          ...formData,
        },
      });

      toast.success("Company updated successfully");
    } else {
      dispatch({
        type: "ADD_COMPANY",
        payload: {
          id: Date.now(),
          ...formData,
        },
      });

      toast.success("Company added successfully");
    }

    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-800 bg-slate-900 p-6"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {/* Company */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Company Name
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Microsoft"
            className={`w-full rounded-lg border bg-slate-800 px-4 py-2.5 text-white outline-none transition ${
              errors.company
                ? "border-red-500"
                : "border-slate-700 focus:border-blue-500"
            }`}
          />

          {errors.company && (
            <p className="mt-1 text-sm text-red-400">{errors.company}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Role
          </label>

          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Software Engineer"
            className={`w-full rounded-lg border bg-slate-800 px-4 py-2.5 text-white outline-none transition ${
              errors.role
                ? "border-red-500"
                : "border-slate-700 focus:border-blue-500"
            }`}
          />

          {errors.role && (
            <p className="mt-1 text-sm text-red-400">{errors.role}</p>
          )}
        </div>

        {/* Package */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Package
          </label>

          <input
            type="text"
            name="packageLPA"
            value={formData.packageLPA}
            onChange={handleChange}
            placeholder="18 LPA"
            className={`w-full rounded-lg border bg-slate-800 px-4 py-2.5 text-white outline-none transition ${
              errors.packageLPA
                ? "border-red-500"
                : "border-slate-700 focus:border-blue-500"
            }`}
          />

          {errors.packageLPA && (
            <p className="mt-1 text-sm text-red-400">{errors.packageLPA}</p>
          )}
        </div>

        {/* Deadline */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Deadline
          </label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className={`w-full rounded-lg border bg-slate-800 px-4 py-2.5 text-white outline-none transition ${
              errors.deadline
                ? "border-red-500"
                : "border-slate-700 focus:border-blue-500"
            }`}
          />

          {errors.deadline && (
            <p className="mt-1 text-sm text-red-400">{errors.deadline}</p>
          )}
        </div>

        {/* Priority */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Priority
          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white outline-none transition focus:border-blue-500"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-white outline-none transition focus:border-blue-500"
          >
            <option>Wishlist</option>
            <option>Applied</option>
            <option>OA</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`rounded-lg px-6 py-2.5 font-medium text-white transition-all duration-300 ${
            isSubmitting
              ? "cursor-not-allowed bg-slate-700"
              : "bg-blue-600 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
          }`}
        >
          {isSubmitting
            ? isEditMode
              ? "Updating..."
              : "Adding..."
            : isEditMode
              ? "Update Company"
              : "Add Company"}
        </button>
      </div>
    </form>
  );
}

export default CompanyForm;
