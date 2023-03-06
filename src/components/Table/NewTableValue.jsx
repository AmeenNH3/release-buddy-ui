import React from "react";
import { selectOptions } from "../helper";
import { useState } from "react";
function NewTableValue({ showModalHandler }) {
  const [stackName, setstackName] = useState("");
  const [localBranch, setlocalBranch] = useState("");
  const [bundleNo, setbundleNo] = useState("");
  const [testedLB, settestedLB] = useState("");
  const [mergedToD, setmergedToD] = useState("");
  const [testedD, settestedD] = useState("");
  const [mergedToM, setmergedToM] = useState("");
  const [testedM, settestedM] = useState("");

  const [stack, setStack] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setStack({
      id: 6,
      stackName,
      localBranch,
      testedLB,
      mergedToD,
      testedD,
      mergedToM,
      testedM,
      bundleNo,
      status: "not-started",
    });

    console.log(stack);

    // showModalHandler();
  };
  return (
    <div className="new-table-value-modal">
      <div className="form-container">
        <h3 className="form-heading">Enter the new stack data</h3>
        <form className="form" onSubmit={submitHandler}>
          {/* <div className="input-container">
            <input type="text" name="id" id="id" disabled value={1} />
            <label htmlFor="id"></label>
          </div> */}
          <div className="input-container">
            <input
              type="text"
              name="stackName"
              id="stackName"
              placeholder="stack name"
              value={stackName}
              onChange={(e) => setstackName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="localBranch"
              id="localBranch"
              placeholder="local branch name"
              value={localBranch}
              onChange={(e) => setlocalBranch(e.target.value)}
            />
          </div>
          <div className="input-container select-container">
            <label htmlFor="testedLB">Tested Local Branch</label>
            <select
              name="testedLB"
              id="testedLB"
              value={testedLB}
              onChange={(e) => settestedLB(e.target.value)}
            >
              {selectOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container  select-container">
            <label htmlFor="mergedToD">Merged to Develop</label>
            <select
              name="mergedToD"
              id="mergedToD"
              value={mergedToD}
              onChange={(e) => setmergedToD(e.target.value)}
            >
              {selectOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container  select-container">
            <label htmlFor="testedD">Tested Develop Branch</label>
            <select
              name="testedD"
              id="testedD"
              value={testedD}
              onChange={(e) => settestedD(e.target.value)}
            >
              {selectOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container  select-container">
            <label htmlFor="mergedToM">Merged To Master</label>
            <select
              name="mergedToM"
              id="mergedToM"
              value={mergedToM}
              onChange={(e) => setmergedToM(e.target.value)}
            >
              {selectOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container  select-container">
            <label htmlFor="testedM">Tested Master Branch</label>
            <select
              name="testedM"
              id="testedM"
              value={testedM}
              onChange={(e) => settestedM(e.target.value)}
            >
              {selectOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="bundleNo"
              id="bundleNo"
              placeholder="BundleNo"
              value={bundleNo}
              onChange={(e) => setbundleNo(e.target.value)}
            />
          </div>
          <div className="input-container  select-container">
            <label htmlFor="status">Status</label>
            <select name="status" id="status">
              {selectOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-button-container">
            <button className="form-action-button submit-btn" type="submit">
              Submit
            </button>
            <button className="form-action-button cancel-btn" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTableValue;
