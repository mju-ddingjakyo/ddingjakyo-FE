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

  return { onChange, values, errors, setErrors };
}
