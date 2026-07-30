import CompanyForm from "../components/company/CompanyForm";

function AddCompany() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Add New Company</h1>

        <p className="mt-2 text-slate-400">
          Add a company to track your placement journey.
        </p>
      </div>

      <CompanyForm />
    </section>
  );
}

export default AddCompany;
