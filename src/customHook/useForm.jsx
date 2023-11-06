import React, { useState } from "react";

export default function useForm(defaultValue, validateInput, api) {
  const [values, setValue] = useState(defaultValue);
  const [errors, setErrors] = useState({});
  const [hasError, setHasError] = useState(true);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const checkError = () => {
    for (let key in errors) {
      if (errors[key] === "") {
        setHasError(false);
      } else {
        setHasError(true);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInput(values));
    checkError();
    if (!hasError) {
      // 에러 검증시 에러가 없으면 api 실행
    } else {
      console.log("에러가 존재하니 api를 실행하지 않습니다");
    }
  };

  return { onChange, values, errors, handleSubmit };
}
