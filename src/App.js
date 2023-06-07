import './css/style.css';
import Nav from './mainNav';
import Centerblock from './mainCenterblock';
import Sidebar from './mainSidebar';
import Bar from './bar';


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main">
          <Nav />
          <Centerblock />
          <Sidebar />
        </div>
        <Bar />
        <footer class="footer"></footer>
      </div>
    </div>
  );
}

export default App;
