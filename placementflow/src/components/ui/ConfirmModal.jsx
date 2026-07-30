function ConfirmModal({ isOpen, title, message, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        <p className="mt-3 text-slate-400">{message}</p>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-slate-700 px-4 py-2 text-slate-300 transition hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
