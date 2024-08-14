import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "../pages/index.jsx";
import { Turn } from "../pages/turn.jsx";
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
      </Routes>
    </BrowserRouter>
  );
}
