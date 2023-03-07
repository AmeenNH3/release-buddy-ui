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

export function changeDataHelper(data, ticketID, stackID, keyName, changeValue) {
  const dataNew = data.map((ticket) => {
    if (ticket.id == ticketID) {
      let newTicket = { ...ticket };
      let newStacks = [...ticket.stacks];
      newStacks = newStacks.map((item) => {
        if (item.id == stackID) {
          let stack = { ...item };

          stack[keyName] = changeValue;
          return stack;
        }
        return item;
      });
      newTicket = { ...newTicket, stacks: newStacks };
      return newTicket;
    }
    return ticket;
  });

  return dataNew;
}

export function addNewStackHelper(data, ticketID, newStackData) {
  const dataNew = data.map((ticket) => {
    if (ticket.id == ticketID) {
      let newTicket = { ...ticket };
      newTicket.stacks.push(newStackData);
      return newTicket;
    }
    return ticket;
  });
  return dataNew;
}

export function deleteStacksHelper(data, ticketID, stacksToDelete) {
  const dataNew = data.map((ticket) => {
    if (ticket.id == ticketID) {
      let newTicket = { ...ticket };

      let newStacks = newTicket.stacks;

      newStacks = newStacks.filter((item) => {
        if (stacksToDelete.includes(item.id) == false) return item;
      });

      newTicket.stacks = newStacks;

      return newTicket;
    }
    return ticket;
  });

  return dataNew;
}
