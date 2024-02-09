import { UserRegistrationLayout } from "./registrationLavout";
import { useState, useRef } from "react";

const UserRegistration = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [Mail, setMail] = useState("");

  const user = { mail: Mail, password: password };

  const [mailValidation, setMailValidation] = useState(false);

  let [validationNumbers, setValidationNumbers] = useState(false);
  let [validationLength, setValidationLength] = useState(false);
  let [validationUpperCaseLetters, setValidationUpperCaseLetters] =
    useState(false);
  let passwordСomparison = useRef(false);
  const validateForm = useRef(false);
  const buttonRef = useRef(null);

  const MailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const onMailChange = ({ target }) => {
    setMail(target.value);
    if (MailRegex.test(target.value)) {
      setMailValidation(true);
    } else {
      setMailValidation(false);
    }
    checkValidate();
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
    if (/[А-ЯA-Z]/.test(target.value)) {
      setValidationUpperCaseLetters(true);
    } else {
      setValidationUpperCaseLetters(false);
    }
    if (/[0-9]/.test(target.value)) {
      setValidationNumbers(true);
    } else {
      setValidationNumbers(false);
    }
    if (target.value.length >= 8) {
      setValidationLength(true);
    } else {
      setValidationLength(false);
    }
    if (target.value === password2) {
      passwordСomparison.current = true;
    } else {
      passwordСomparison.current = false;
    }
    checkValidate();
  };

  const passwordCheck = ({ target }) => {
    setPassword2(target.value);
    if (target.value === password) {
      passwordСomparison.current = true;
    } else {
      passwordСomparison.current = false;
    }
    checkValidate();
  };

  const checkValidate = () => {
    if (
      mailValidation === true &&
      validationNumbers === true &&
      validationLength === true &&
      validationUpperCaseLetters === true &&
      passwordСomparison.current === true
    ) {
      validateForm.current = true;
      setTimeout(() => {
        buttonRef.current.focus();
      }, 0);
    } else {
      validateForm.current = false;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <UserRegistrationLayout
      buttonRef={buttonRef}
      Mail={Mail}
      mailValidation={mailValidation}
      validationNumbers={validationNumbers}
      validationLength={validationLength}
      validationUpperCaseLetters={validationUpperCaseLetters}
      passwordСomparison={passwordСomparison}
      password={password}
      password2={password2}
      onMailChange={onMailChange}
      onPasswordChange={onPasswordChange}
      passwordCheck={passwordCheck}
      onSubmit={onSubmit}
      validateForm={validateForm}
    />
  );
};

export default UserRegistration;
