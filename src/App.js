import s from './App.module.css';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
