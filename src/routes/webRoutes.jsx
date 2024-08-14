import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "../pages/index.jsx";
import { Turn } from "../pages/turn.jsx";
import { WorkWithUs } from "../pages/workWithUs.jsx";
export function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Index />}
        />
        <Route
          path="/turnos"
          element={<Turn />}
        />
        <Route
          path="/trabaja-con-nosotros"
          element={<WorkWithUs />}
        />
      </Routes>
    </BrowserRouter>
  );
}
