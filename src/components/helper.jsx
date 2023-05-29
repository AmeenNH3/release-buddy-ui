export const isStatus = (value) => {
  if (value == "pending" || value == "not_started" || value == "completed") return value;

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
  if (value == "not_started") {
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
    value: "not_started",
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

          if (keyName == "bundleNo") {
            stack[keyName] = parseInt(changeValue);
          } else {
            stack[keyName] = changeValue;
          }

          stack["status"] = findStatus(stack);

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

export function findStatus(stack) {
  let sum =
    getStatusValue(stack.testedLB) +
    getStatusValue(stack.mergedToD) +
    getStatusValue(stack.testedD) +
    getStatusValue(stack.mergedToM) +
    getStatusValue(stack.testedM);

  if (sum == 5) return "completed";
  if (sum == -5) return "not_started";

  return "pending";
}

export function getStatusValue(value) {
  if (value == "pending") return 0;
  if (value == "not_started") return -1;
  if (value == "completed") return 1;
}
