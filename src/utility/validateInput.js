export default function validate(validateValue) {
  const errors = {
    ...validateValue,
  };

  const email_expTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const password_expTest =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  if (
    "email" in validateValue &&
    email_expTest.test(validateValue.email) === false
  ) {
    errors.email = "옳바른 형식의 이메일이 아닙니다!";
  } else {
    delete errors.email;
  }

  if (
    "password" in validateValue &&
    password_expTest.test(validateValue.password) === false
  ) {
    errors.password = "영문, 숫자, 특수기호 조합 8자리 이상을 사용해주세요!";
  } else {
    delete errors.password;
  }

  if (
    "passwordCheck" in validateValue &&
    validateValue.password !== validateValue.passwordCheck
  ) {
    errors.passwordCheck = "패스워드가 일치하지 않습니다";
  } else {
    delete errors.passwordCheck;
  }

  if (
    "teamName" in validateValue &&
    (validateValue?.teamName?.length <= 4 ||
      validateValue?.teamName?.length >= 10)
  ) {
    errors.teamName = "최소4글자 최대 10글자를 작성해주세요!";
  } else {
    delete errors.teamName;
  }

  if (
    "teamIntro" in validateValue &&
    (validateValue?.teamIntro?.length <= 10 ||
      validateValue?.teamIntro?.length >= 50)
  ) {
    errors.teamIntro = "최소10글자 최대 50글자를 작성해주세요!";
  } else {
    delete errors.teamIntro;
  }

  if ("openKakaoID" in validateValue && !validateValue?.openKakaoID) {
    errors.openKakaoID = "오픈톡방 ID가 입력되지 않았습니다!";
  } else {
    delete errors.openKakaoID;
  }

  return errors;
}
