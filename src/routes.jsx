import { Routes, Route } from "react-router-dom";
import { Centerblock } from "./pages/main/mainCenterblock";
import { Login } from "./pages/login";
import { Mytracks } from "./pages/myTracks";
import { ProtectedRoute } from "./protected-route";

export const AppRoutes = (user) => {
  return (
    <Routes>
      <Route path="/" element={< Login/>} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/main" element={<Centerblock />} />
        <Route path="/myTracks" element={<Mytracks />} />
      </Route>
    </Routes>
  );
};