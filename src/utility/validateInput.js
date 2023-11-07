export default function validate(validateValue) {
  const errors = {
    ...validateValue,
  };

  const email_expTest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const password_expTest =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  // 이메일 인증
  if (
    "email" in validateValue &&
    email_expTest.test(validateValue.email) === false
  ) {
    errors.email = "옳바른 형식의 이메일이 아닙니다!";
  } else {
    delete errors.email;
  }

  // 비밀번호 인증
  if (
    "password" in validateValue &&
    password_expTest.test(validateValue.password) === false
  ) {
    errors.password = "영문, 숫자, 특수기호 조합 8자리 이상을 사용해주세요!";
  } else {
    delete errors.password;
  }

  // 비밀번호 체크 인증
  if (
    "passwordCheck" in validateValue &&
    validateValue.password !== validateValue.passwordCheck
  ) {
    errors.passwordCheck = "패스워드가 일치하지 않습니다";
  } else {
    delete errors.passwordCheck;
  }

  // 팀 이름 인증
  if (
    "teamName" in validateValue &&
    (validateValue?.teamName?.length <= 3 ||
      validateValue?.teamName?.length >= 11)
  ) {
    errors.teamName = "최소 4글자 최대 10글자를 작성해주세요!";
  } else {
    delete errors.teamName;
  }

  // 팀 설명 인증
  if (
    "teamIntro" in validateValue &&
    (validateValue?.teamIntro?.length <= 9 ||
      validateValue?.teamIntro?.length >= 51)
  ) {
    errors.teamIntro = "최소 10글자 최대 50글자 입력 가능합니다";
  } else {
    delete errors.teamIntro;
  }

  // 오픈 톡방 인증
  if ("openKakaoID" in validateValue && !validateValue?.openKakaoID) {
    errors.openKakaoID = "오픈톡방 ID가 입력되지 않았습니다!";
  } else {
    delete errors.openKakaoID;
  }

  // 팀 이름 인증
  if (
    "name" in validateValue &&
    (validateValue?.name?.length <= 1 || validateValue?.name?.length >= 6)
  ) {
    errors.name = "최소 2글자 최대 5글자 입력 가능합니다";
  } else {
    delete errors.name;
  }

  // 전공 인증
  if ("major" in validateValue && !validateValue?.major) {
    errors.major = "학과가 입력되지 않았습니다!";
  } else {
    delete errors.major;
  }

  // 본인 소개글 인증
  if (
    "selfIntro" in validateValue &&
    (validateValue?.selfIntro?.length <= 9 ||
      validateValue?.selfIntro?.length >= 31)
  ) {
    errors.selfIntro = "최소 10글자 최대 30글자를 작성해주세요";
  } else {
    delete errors.selfIntro;
  }

  return errors;
}
