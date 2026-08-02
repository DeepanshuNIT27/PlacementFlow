export function getAnalyticsStats(companies) {
  const totalApplications = companies.filter(
    (company) => company.status !== "Wishlist",
  ).length;

  const oa = companies.filter((company) => company.status === "OA").length;

  const interview = companies.filter(
    (company) => company.status === "Interview",
  ).length;

  const offers = companies.filter(
    (company) => company.status === "Offer",
  ).length;

  const rejected = companies.filter(
    (company) => company.status === "Rejected",
  ).length;

  return {
    totalApplications,
    oa,
    interview,
    offers,
    rejected,
  };
}
