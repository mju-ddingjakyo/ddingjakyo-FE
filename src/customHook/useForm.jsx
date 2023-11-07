import React, { useState } from "react";

export default function useForm(defaultValue, validateInput, api) {
  const [values, setValue] = useState(defaultValue);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const checkError = () => {
    if (Object.keys(errors).length === 0 && errors.constructor === Object) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInput(values));
    console.log(errors);
    if (checkError) {
      // 에러 검증시 에러가 없으면 api 실행
    } else {
      console.log("에러가 존재하니 api를 실행하지 않습니다");
    }
  };

  return { onChange, values, errors, handleSubmit };
}
