const defaultChecklist = {
  resumeSubmitted: false,
  oaCompleted: false,
  interviewScheduled: false,
  hrRoundCompleted: false,
};

const dummyData = [
  {
    id: 1,
    company: "Microsoft",
    role: "SDE Intern",
    packageLPA: "₹12 LPA",
    deadline: "30 Aug",
    priority: "High",
    status: "Wishlist",

    notes: "",
    resumeVersion: "",
    usefulLinks: "",

    checklist: { ...defaultChecklist },
  },
  {
    id: 2,
    company: "Google",
    role: "Software Engineer",
    packageLPA: "₹18 LPA",
    deadline: "25 Aug",
    priority: "High",
    status: "Applied",

    notes: "",
    resumeVersion: "",
    usefulLinks: "",

    checklist: { ...defaultChecklist },
  },
  {
    id: 3,
    company: "Amazon",
    role: "SDE I",
    packageLPA: "₹16 LPA",
    deadline: "20 Aug",
    priority: "Medium",
    status: "OA",

    notes: "",
    resumeVersion: "",
    usefulLinks: "",

    checklist: { ...defaultChecklist },
  },
  {
    id: 4,
    company: "Adobe",
    role: "Member of Technical Staff",
    packageLPA: "₹22 LPA",
    deadline: "18 Aug",
    priority: "Low",
    status: "Interview",

    notes: "",
    resumeVersion: "",
    usefulLinks: "",

    checklist: { ...defaultChecklist },
  },
  {
    id: 5,
    company: "Atlassian",
    role: "Frontend Engineer",
    packageLPA: "₹24 LPA",
    deadline: "15 Aug",
    priority: "High",
    status: "Offer",

    notes: "",
    resumeVersion: "",
    usefulLinks: "",

    checklist: { ...defaultChecklist },
  },
];

export default dummyData;
