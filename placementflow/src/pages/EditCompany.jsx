import CompanyForm from "../components/company/CompanyForm";

function EditCompany() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Edit Company</h1>

        <p className="mt-2 text-slate-400">Update company information.</p>
      </div>

      <CompanyForm />
    </section>
  );
}

export default EditCompany;
