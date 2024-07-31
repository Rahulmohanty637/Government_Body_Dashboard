import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import TrainingCenters from "./pages/Dashboard/TrainingCentres";
import BatchTable from "./pages/Dashboard/TrainingBatches";
import BatchDetails from "./pages/Dashboard/BatchDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="trainingcenters" element={<TrainingCenters />} />
          <Route path="trainingbatches" element={<BatchTable />} />
          <Route path="batchdetailas" element={<BatchDetails />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
