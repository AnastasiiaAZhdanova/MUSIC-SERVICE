//import { useState } from 'react';
import s from './login.module.css';
import '../../example stratos font/Stratos-Medium.woff2';


export const Login = ({ onAuthButtonClick }) => {
  return (
    <>
      <div className={s.login}>
        <div className={`${s.nav__logo} ${s.logo}`}>
          <img className={s.logo__image} src="./img/logo2.png" alt="logo2" />
        </div>
        <div className={s.form}>
          <input className={s.login__input} type="text" placeholder="Логин" />
          <input className={s.login__input} type="text" placeholder="Пароль" />

          <button className={s.submit__enter} onClick={onAuthButtonClick}>
          Войти
       </button>
       <button className={s.submit__reg} >
       Зарегистрироваться
       </button>
        </div>
      </div>
    </>
  );
};
