import React from "react";
import Dashboard from "./Dashboard";
import Landing from "./pages/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>;
      </Routes>
      {/* <div>Footer</div> */}
    </>
  );
}

export default App;
