import React from "react";
import { Link } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { getLogin, register } from "../../api";

export let username = localStorage.getItem('username');

export default function AuthPage() {
  const [isLoginMode, setisLoginMode] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleLogin = async ({ email, password }) => {
    getLogin(email, password).then((json) => {
      if (json.id) {
        localStorage.setItem('token', true);
        localStorage.setItem('username', json.username);
        window.location.href = "/";
      } else {
        console.log(json);
        setError(json.detail ? json.detail : (json.password ? 'Пароль:' + json.password : 'Емейл:' + json.email));
      }
    });
    
  };

  const handleRegister = async () => {
    register(email, password).then((json) => {
      if (json.id) {
        localStorage.setItem('token', true);
        localStorage.setItem('username', json.username);
        window.location.href = "/";
      } else {
        console.log(json);
        if (!(repeatPassword === password)) {
          setError('Пароли различаются');
        } else {
          setError(json.email ? json.email : (json.password ? 'Пароль:' + json.password : 'Емейл:' + json.email));
        }
      }
    });
  };

  const toggleIsLoginMode = () => {
    setisLoginMode(false);
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
     <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
                <S.SecondaryButton onClick={toggleIsLoginMode}>Зарегистрироваться</S.SecondaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
