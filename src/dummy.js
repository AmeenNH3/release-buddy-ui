import { v4 as uuidv4 } from "uuid";
export const dummy = [
  {
    id: "example-ticket-100021",
    name: "Example",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eaque veniam excepturi facilis facere voluptatibus optio, maiores in ipsum fugiat perferendis. Temporibus exercitationem consectetur aliquid quidem voluptatibus. Aut, tempora eius.",
    owner: "Sudhakar",
    changeTicketNumber: "CH0012412",
    releaseDate: "28.05.2023",
    createdDate: "24.05.2023",
    lastModifiedDate: "25.05.2023",
    workingTeams: "Yosemetie, woodpeckers",
    status: "scheduled-for-release",
    stacks: [
      {
        id: uuidv4(),
        stackName: "stack_one",
        localBranch: "local-branch-one",
        testedLB: "completed",
        mergedToD: "pending",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_two",
        localBranch: "local-branch-two",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_three",
        localBranch: "local-branch-three",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "pending",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_four",
        localBranch: "local-branch-four",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "completed",
        mergedToM: "completed",
        testedM: "completed",
        bundleNo: 134,
        status: "completed",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_five",
        localBranch: "local-branch-five",
        testedLB: "not-started",
        mergedToD: "not-started",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "not-started",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_one",
        localBranch: "local-branch-one",
        testedLB: "completed",
        mergedToD: "pending",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_two",
        localBranch: "local-branch-two",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_three",
        localBranch: "local-branch-three",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "pending",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_four",
        localBranch: "local-branch-four",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "completed",
        mergedToM: "completed",
        testedM: "completed",
        bundleNo: 134,
        status: "completed",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_five",
        localBranch: "local-branch-five",
        testedLB: "not-started",
        mergedToD: "not-started",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "not-started",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_one",
        localBranch: "local-branch-one",
        testedLB: "completed",
        mergedToD: "pending",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_two",
        localBranch: "local-branch-two",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_three",
        localBranch: "local-branch-three",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "pending",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_four",
        localBranch: "local-branch-four",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "completed",
        mergedToM: "completed",
        testedM: "completed",
        bundleNo: 134,
        status: "completed",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stack_five",
        localBranch: "local-branch-five",
        testedLB: "not-started",
        mergedToD: "not-started",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "not-started",
        owner: "ameen",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Mongo Atlas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eaque veniam excepturi ",
    owner: "Sudhakar",
    workingTeams: ["Yosemetie", "woodpeckers"],
    changeTicketNumber: "CH0012412",
    releaseDate: "28.05.2023",
    createdDate: "24.05.2023",
    lastModifiedDate: "25.05.2023",
    status: "scheduled-for-release",
    stacks: [
      {
        id: uuidv4(),
        stackName: "stackOne",
        localBranch: "mongo_atlas",
        testedLB: "completed",
        mergedToD: "pending",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackTwo",
        localBranch: "mongo_atlas",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackThree",
        localBranch: "mongo_atlas",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "pending",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackFour",
        localBranch: "mongo_atlas",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "completed",
        mergedToM: "completed",
        testedM: "completed",
        bundleNo: 1245,
        status: "completed",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackFive",
        localBranch: "mongo_atlas",
        testedLB: "not-started",
        mergedToD: "not-started",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "not-started",
        owner: "ameen",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Monthly Release",
    owner: "Sudhakar",
    description:
      " Temporibus exercitationem consectetur aliquid quidem voluptatibus. Aut, tempora eius.",
    changeTicketNumber: "CH0012412",
    workingTeams: ["Yosemetie", "woodpeckers"],
    releaseDate: "28.05.2023",
    createdDate: "24.05.2023",
    lastModifiedDate: "25.05.2023",
    status: "scheduled-for-release",
    stacks: [
      {
        id: uuidv4(),
        stackName: "stackOne",
        localBranch: "bug-fix",
        testedLB: "completed",
        mergedToD: "pending",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackTwo",
        localBranch: "region-change",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackThree",
        localBranch: "bug-fix",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "pending",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "pending",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackFour",
        localBranch: "change-logo",
        testedLB: "completed",
        mergedToD: "completed",
        testedD: "completed",
        mergedToM: "completed",
        testedM: "completed",
        bundleNo: 1245,
        status: "completed",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackFive",
        localBranch: "issue-fix",
        testedLB: "not-started",
        mergedToD: "not-started",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "not-started",
        owner: "ameen",
      },
      {
        id: uuidv4(),
        stackName: "stackSix",
        localBranch: "issue-fix",
        testedLB: "not-started",
        mergedToD: "not-started",
        testedD: "not-started",
        mergedToM: "not-started",
        testedM: "not-started",
        bundleNo: null,
        status: "not-started",
        owner: "ameen",
      },
    ],
  },
];
