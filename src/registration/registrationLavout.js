import styles from "./registrationLavout.module.css";

export const UserRegistrationLayout = ({
  buttonRef,
  Mail,
  mailValidation,
  validationNumbers,
  validationLength,
  validationUpperCaseLetters,
  passwordСomparison,
  password,
  password2,
  onMailChange,
  onPasswordChange,
  passwordCheck,
  onSubmit,
  validateForm,
}) => {
  return (
    <div className={styles.app}>
      <form className={styles.registrForm} onSubmit={onSubmit}>
        <input
          className={styles.registrationInput}
          type="email"
          placeholder="Почта"
          value={Mail}
          onChange={onMailChange}
        ></input>
        {Mail !== "" && (
          <div className={styles.message}>
            <h3>Почта должна быть написана в формате:</h3>
            <p className={!mailValidation ? styles.inValid : styles.valid}>
              maill@yourmail.com
            </p>
          </div>
        )}
        <input
          className={styles.registrationInput}
          onChange={onPasswordChange}
          value={password}
          placeholder="Пароль"
          type="password"
        ></input>
        <input
          className={styles.registrationInput}
          value={password2}
          type="password"
          placeholder="Повторите пароль"
          onChange={passwordCheck}
        ></input>
        {password !== "" && (
          <div className={styles.message}>
            <h3>Пароль должен содержать:</h3>
            <p
              className={
                !validationUpperCaseLetters ? styles.inValid : styles.valid
              }
            >
              <b>Заглавные (прописные)</b> буквы
            </p>
            <p className={!validationNumbers ? styles.inValid : styles.valid}>
              <b>Числа</b>
            </p>
            <p className={!validationLength ? styles.inValid : styles.valid}>
              Минимум <b>8 символов</b>
            </p>
            <p
              className={
                !passwordСomparison.current ? styles.inValid : styles.valid
              }
            >
              Пароль должен совпадать
            </p>
          </div>
        )}
        <button
          ref={buttonRef}
          className={
            !validateForm.current
              ? styles.registrationButton
              : styles.registrationButtonValid
          }
          type="submit"
          disabled={!validateForm.current}
        >
          Отправить форму
        </button>
      </form>
    </div>
  );
};
