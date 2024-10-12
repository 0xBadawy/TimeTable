import React from "react";
import Table from "./TimeTable/Table";
import Dashboard from "./Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
  { path: "/table", element: <Table /> },
  { path: "/Dashboard", element: <Dashboard /> },
]);

const App = () => {
  return (
    <div style={{ direction: "rtl" }}>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
