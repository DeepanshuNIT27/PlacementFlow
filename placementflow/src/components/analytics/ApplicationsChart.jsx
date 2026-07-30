import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", applications: 2 },
  { month: "Feb", applications: 4 },
  { month: "Mar", applications: 3 },
  { month: "Apr", applications: 6 },
  { month: "May", applications: 5 },
  { month: "Jun", applications: 8 },
];

function ApplicationsChart() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Applications by Month
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Monthly application activity overview.
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#CBD5E1", fontSize: 13 }}
              tickLine={false}
              axisLine={{ stroke: "#475569" }}
            />

            <YAxis
              tick={{ fill: "#CBD5E1", fontSize: 13 }}
              tickLine={false}
              axisLine={{ stroke: "#475569" }}
            />

            <Tooltip
              cursor={{ fill: "rgba(59,130,246,0.08)" }}
              contentStyle={{
                backgroundColor: "#0F172A",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
              labelStyle={{
                color: "#fff",
                fontWeight: 600,
              }}
            />

            <Bar
              dataKey="applications"
              fill="#3B82F6"
              radius={[8, 8, 0, 0]}
              animationDuration={700}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ApplicationsChart;
