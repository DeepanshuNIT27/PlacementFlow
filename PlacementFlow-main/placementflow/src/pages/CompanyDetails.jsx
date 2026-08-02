import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { PlacementContext } from "../context/PlacementContext";

const defaultChecklist = {
  resumeSubmitted: false,
  oaCompleted: false,
  interviewScheduled: false,
  hrRoundCompleted: false,
};

function CompanyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { companies, dispatch } = useContext(PlacementContext);

  const company = companies.find((item) => item.id === Number(id));

  const [details, setDetails] = useState({
    notes: "",
    resumeVersion: "",
    usefulLinks: "",
    checklist: defaultChecklist,
  });

  useEffect(() => {
    if (!company) return;

    setDetails({
      notes: company.notes || "",
      resumeVersion: company.resumeVersion || "",
      usefulLinks: company.usefulLinks || "",
      checklist: company.checklist || defaultChecklist,
    });
  }, [company]);

  if (!company) {
    return (
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-white">Company Not Found</h2>

        <p className="mt-3 text-slate-400">This company does not exist.</p>

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700"
        >
          Back to Dashboard
        </button>
      </section>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChecklistChange = (e) => {
    const { name, checked } = e.target;

    setDetails((prev) => ({
      ...prev,
      checklist: {
        ...prev.checklist,
        [name]: checked,
      },
    }));
  };

  const handleSave = () => {
    dispatch({
      type: "UPDATE_COMPANY_DETAILS",
      payload: {
        id: company.id,
        ...details,
      },
    });

    navigate(-1);
  };

  return (
    <section className="mx-auto max-w-5xl">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-slate-400 transition hover:text-white"
      >
        <FiArrowLeft size={18} />
        Back
      </button>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <div className="border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold text-white">{company.company}</h1>

          <p className="mt-2 text-lg text-slate-400">{company.role}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-sm text-slate-500">Package</p>

            <h3 className="mt-2 text-xl font-semibold text-blue-400">
              {company.packageLPA}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-sm text-slate-500">Deadline</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {company.deadline}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-sm text-slate-500">Priority</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {company.priority}
            </h3>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-sm text-slate-500">Current Status</p>

            <h3 className="mt-2 text-xl font-semibold text-green-400">
              {company.status}
            </h3>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Personal Notes
            </label>

            <textarea
              rows={5}
              name="notes"
              value={details.notes}
              onChange={handleInputChange}
              placeholder="Write your interview preparation notes..."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Resume Version
            </label>

            <input
              type="text"
              name="resumeVersion"
              value={details.resumeVersion}
              onChange={handleInputChange}
              placeholder="Resume_v5.pdf"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Useful Links
            </label>

            <input
              type="text"
              name="usefulLinks"
              value={details.usefulLinks}
              onChange={handleInputChange}
              placeholder="https://..."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Interview Checklist
            </h2>

            <div className="space-y-3">
              <label className="flex items-center gap-3 text-slate-300">
                <input
                  type="checkbox"
                  name="resumeSubmitted"
                  checked={details.checklist.resumeSubmitted}
                  onChange={handleChecklistChange}
                />
                Resume Submitted
              </label>

              <label className="flex items-center gap-3 text-slate-300">
                <input
                  type="checkbox"
                  name="oaCompleted"
                  checked={details.checklist.oaCompleted}
                  onChange={handleChecklistChange}
                />
                OA Completed
              </label>

              <label className="flex items-center gap-3 text-slate-300">
                <input
                  type="checkbox"
                  name="interviewScheduled"
                  checked={details.checklist.interviewScheduled}
                  onChange={handleChecklistChange}
                />
                Interview Scheduled
              </label>

              <label className="flex items-center gap-3 text-slate-300">
                <input
                  type="checkbox"
                  name="hrRoundCompleted"
                  checked={details.checklist.hrRoundCompleted}
                  onChange={handleChecklistChange}
                />
                HR Round Completed
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyDetails;
