import range from "lodash/range";
import { Random } from "@hv/uikit-react-core";

const rand = new Random();

const formatDate = date => date.toISOString().split("T")[0];

const getOption = (opts, i) => opts[i % opts.length];

const newEntry = i => {
  const r = rand.next();
  const [dateMax, dateMin] = [2018, 2022].map(y => new Date(y, 0).getTime());
  return {
    id: `${i + 1}`,
    name: `Event ${i + 1}`,
    createdDate: formatDate(new Date(rand.next(dateMax, dateMin))),
    eventType: "Anomaly detection",
    status: getOption(["Closed", "Open"], i),
    riskScore: rand.next(100, 10),
    severity: getOption(["Critical", "Major", "Average", "Minor"], i),
    priority: (r > 0.66 && "High") || (r > 0.33 && "Medium") || "Low",
  };
};

export const makeData = (len = 10) => range(len).map(newEntry);

// https://react-table.tanstack.com/docs/api/useTable#column-options
// width is only used if explicitly passed in column.getHeaderProps
export const getColumns = () => [
  { Header: "Title", accessor: "name", style: { minWidth: 120 } },
  { Header: "Time", accessor: "createdDate", style: { minWidth: 100 } },
  { Header: "Event Type", accessor: "eventType", style: { minWidth: 140 } },
  { Header: "Status", accessor: "status", style: { width: 120 } },
  // numeric values should be right-aligned
  {
    Header: "Probability",
    accessor: "riskScore",
    align: "right",
    Cell: ({ value }) => `${value}%`,
  },
  { Header: "Severity", accessor: "severity" },
  { Header: "Priority", accessor: "priority" },
];
