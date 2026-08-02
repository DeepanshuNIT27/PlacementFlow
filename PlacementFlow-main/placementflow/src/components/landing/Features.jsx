import { FiBriefcase, FiCalendar, FiBarChart2 } from "react-icons/fi";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <FiBriefcase size={28} />,
    title: "Track Applications",
    description:
      "Manage every company application from wishlist to final offer in one organized dashboard.",
  },
  {
    icon: <FiCalendar size={28} />,
    title: "Never Miss Deadlines",
    description:
      "Keep important OA dates, interview schedules and deadlines in one place.",
  },
  {
    icon: <FiBarChart2 size={28} />,
    title: "Simple Analytics",
    description:
      "View application statistics and placement progress with clean visual insights.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Why Choose
            <span className="text-blue-500"> PlacementFlow?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Everything you need to organize your placement journey without
            spreadsheets, scattered notes or missed deadlines.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
