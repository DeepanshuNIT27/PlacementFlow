import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "../components/layout/Layout";

// Pages
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import CompanyDetails from "../pages/CompanyDetails";
import AddCompany from "../pages/AddCompany";
import EditCompany from "../pages/EditCompany";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Landing />} />

      {/* Protected/Application Routes */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/company/:id" element={<CompanyDetails />} />

        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/company/edit/:id" element={<EditCompany />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
