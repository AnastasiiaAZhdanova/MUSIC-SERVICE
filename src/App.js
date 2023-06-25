// import './css/style.css';
import Nav from './mainNav';
import Centerblock from './mainCenterblock';
import Sidebar from './mainSidebar';
import Bar from './bar';
import s from './App.module.css'

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
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
