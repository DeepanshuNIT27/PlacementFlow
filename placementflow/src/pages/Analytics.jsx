import usePlacement from "../hooks/usePlacement";

import AnalyticsCard from "../components/analytics/AnalyticsCard";
import ApplicationsChart from "../components/analytics/ApplicationsChart";

import { getAnalyticsStats } from "../utils/analytics";

function Analytics() {
  const { companies } = usePlacement();

  const stats = getAnalyticsStats(companies);

  return (
    <section className="flex flex-col gap-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-white">Analytics</h1>

        <p className="mt-2 text-slate-400">
          Overview of your placement progress.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
        <AnalyticsCard
          title="Applications"
          value={stats.totalApplications}
          color="text-blue-400"
        />

        <AnalyticsCard title="OA" value={stats.oa} color="text-yellow-400" />

        <AnalyticsCard
          title="Interview"
          value={stats.interview}
          color="text-purple-400"
        />

        <AnalyticsCard
          title="Offers"
          value={stats.offers}
          color="text-green-400"
        />

        <AnalyticsCard
          title="Rejected"
          value={stats.rejected}
          color="text-red-400"
        />
      </div>

      {/* Applications Chart */}
      <ApplicationsChart />
    </section>
  );
}

export default Analytics;
