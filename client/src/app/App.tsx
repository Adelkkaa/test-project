import { Routes, Route } from "react-router-dom";
import { ListPageAsync } from "@/pages/ListPage";
import { SinglePageAsync } from "@/pages/SinglePage";
import { Suspense } from "react";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ListPageAsync />
          </Suspense>
        }
      />
      <Route
        path="/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <SinglePageAsync />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
