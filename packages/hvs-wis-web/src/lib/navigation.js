const navigation = [
  {
    id: "1",
    label: "Configuration",
    path: "/configuration",
    data: [
      {
        id: "1-1",
        label: "Incident",
        path: "/configuration/incident",
      },
    ],
  },
  {
    id: "2",
    label: "Management",
    path: "/management",
    data: [
      {
        id: "2-1",
        label: "Incident Type",
        path: "/management/incident-type",
      },
      {
        id: "2-2",
        label: "SOP",
        path: "/management/sop",
      },
      {
        id: "2-3",
        label: "Workflow",
        path: "/management/workflow",
      },
    ],
  },
];

export default navigation;
