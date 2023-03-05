export const isStatus = (value) => {
  if (value == "pending" || value == "not-started" || value == "completed") return value;

  return null;
};

export const getIconName = (value) => {
  let iconName = null;
  if (value == "pending") {
    iconName = "alert-circle-outline";
  }
  if (value == "completed") {
    iconName = "checkmark-outline";
  }
  if (value == "not-started") {
    iconName = "stop-circle-outline";
  }
  if (value == "in-progress") {
    iconName = "alert-circle-outline";
  }
  return iconName;
};

export const selectOptions = [
  {
    label: "Not Started",
    value: "not-started",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Completed",
    value: "completed",
  },
];
