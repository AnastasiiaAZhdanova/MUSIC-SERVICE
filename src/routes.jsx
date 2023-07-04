import { Routes, Route } from 'react-router-dom';
import { Centerblock } from './pages/main/mainCenterblock';
import Nav from './pages/main/mainNav';
import Sidebar from './pages/main/mainSidebar';
import Bar from '../src/pages/main/bar';
import { Login } from './pages/login';
import { Mytracks } from './pages/myTracks';
import { Registration } from './pages/registration';
import { ProtectedRoute } from './protected-route';

export const AppRoutes = (user) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/main"
          element={
            <>
              <Nav />
              <Centerblock />
              <Sidebar />
              <Bar />
            </>
          }
        />
        <Route path="/myTracks" element={<Mytracks />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  );
};
