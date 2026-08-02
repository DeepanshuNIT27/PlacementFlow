import StatCard from "./StatCard";

const stats = [
  {
    title: "Total Applications",
    value: 28,
  },
  {
    title: "Online Assessments",
    value: 8,
  },
  {
    title: "Interviews",
    value: 5,
  },
  {
    title: "Offers",
    value: 2,
  },
];

function StatsCards() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} title={stat.title} value={stat.value} />
      ))}
    </section>
  );
}

export default StatsCards;
