import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./SNAlayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import BatchDetails from "./pages/Dashboard/BatchDetails";
import SNALogin from "./pages/Dashboard/SNALogin";
import TCDetails from "./pages/Dashboard/TCDetails";
import TBDetails from "./pages/Dashboard/TBDetails";
import SNAProtectedRoutes from "./utils/SNAProtectedRoutes";
import Marksheet from "./pages/Dashboard/Marksheet";
import ViewResult from "./pages/Dashboard/ViewResult";
import IndividualStudentMarksheet from "./pages/Dashboard/IndividualStudentMarksheet";
import ViewReports from "./pages/Dashboard/ViewReports";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="login" element={<SNALogin />} />
        <Route element={<SNAProtectedRoutes />}>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="trainingcenters" element={<TCDetails />} />
            <Route path="trainingbatches" element={<TBDetails />} />
            <Route path="batchdetails/:batchId" element={<BatchDetails />} />
            <Route path="reports" element={<ViewReports/>}/>
            <Route path="marks" element={<Marksheet />} />
            <Route path="batchresult/:batchId" element={<ViewResult />} />
            <Route
              path="studentresult/:studentId"
              element={<IndividualStudentMarksheet />}
            />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
