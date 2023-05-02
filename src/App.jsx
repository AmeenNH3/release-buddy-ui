import React from "react";
import Dashboard from "./Dashboard";
import Landing from "./pages/Landing";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Settings from "./pages/Settings";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout></SharedLayout>
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="home" element={<Home></Home>}></Route>
          <Route path="report" element={<Report></Report>}></Route>
          <Route path="settings" element={<Settings></Settings>}></Route>
        </Route>
      </Routes>
      {/* <div>Footer</div> */}
    </>
  );
}

export default App;
