export default function validate(validateValue) {
  const errors = {
    email: "",
    password: "",
    passwordCheck: "",
    teamName: "",
    openKakaoID: "",
  };
  const email_expTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  if (!validateValue.email) {
    errors.email = "이메일이 입력되지 않았습니다!";
  } else if (email_expTest.test(validateValue.email) === false) {
    errors.email = "옳바른 형식의 이메일이 아닙니다!";
  }

  if (!validateValue.password) {
    errors.password = "패스워드가 입력되지 않았습니다";
  } else if (validateValue.password !== validateValue.passwordCheck) {
    errors.passwordCheck = "패스워드가 일치하지 않습니다";
  }

  if (!validateValue.teamName)
    errors.teamName = "팀이름이 입력되지 않았습니다!";

  if (!validateValue.opeKakaoID)
    errors.openKakaoID = "오픈톡방 ID가 입력되지 않았습니다!";

  return errors;
}
