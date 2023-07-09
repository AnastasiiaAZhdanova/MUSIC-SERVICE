import s from './login.module.css';
import '../../example stratos font/Stratos-Medium.woff2';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  const navigate = useNavigate();
  const enterButtonClick = () => {
    navigate("/main", { replace: true });
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
          <input className={s.login__input} type="text" placeholder="Повторите пароль" />
          <button className={s.submit__enter} onClick={enterButtonClick}>
          Зарегистрироваться
       </button>
        </div>
      </div>
    </>
  );
};