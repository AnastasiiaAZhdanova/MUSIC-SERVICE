
import s from './login.module.css';
import '../../example stratos font/Stratos-Medium.woff2';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();
  const enterButtonClick = () => {
    navigate("/main", { replace: true });
  };
  const regButtonClick = () => {
    navigate("/registration", { replace: true });
  };
    
  return (
    <>
      <div className={s.login}>
        <div className={`${s.nav__logo} ${s.logo}`}>
          <img className={s.logo__image} src="./img/logo2.png" alt="logo2" />
        </div>
        <div className={s.form}>
          <input className={s.login__input} type="text" placeholder="Логин" />
          <input className={s.login__input} type="text" placeholder="Пароль" />
          <button className={s.submit__enter} onClick={enterButtonClick}>
          Войти
       </button>
       <button className={s.submit__reg} onClick={regButtonClick}>
       Зарегистрироваться
       </button>
        </div>
      </div>
    </>
  );
};
