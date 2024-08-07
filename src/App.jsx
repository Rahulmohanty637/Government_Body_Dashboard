import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import BatchDetails from "./pages/Dashboard/BatchDetails";
import SNALogin from "./pages/Dashboard/SNALogin";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import TCDetails from "./pages/Dashboard/TCDetails";
import TBDetails from "./pages/Dashboard/TBDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="login" element={<SNALogin />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="trainingcenters" element={<TCDetails />} />
            <Route path="trainingbatches" element={<TBDetails />} />
            <Route path="batchdetails/:batchId" element={<BatchDetails />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
