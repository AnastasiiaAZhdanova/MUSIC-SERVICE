import { useState } from 'react';
import Nav from './mainNav';
import Centerblock from './pages/main/mainCenterblock';
import Sidebar from './mainSidebar';
import Bar from './bar';
import { Login } from './pages/login';
import s from './App.module.css'
import { AppRoutes } from "./routes";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ login: "xxx" });

  const handleLogout = () => setUser(null);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
      <AppRoutes user={user}/>
      <Login user={user}
          onAuthButtonClick={user ? handleLogout : handleLogin}/>
        <div className={s.main}>
          <Nav />
          <Centerblock />
          <Sidebar />
        </div>
        <Bar />
        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
