import useForm from "../../customHook/useForm";
import validateInput from "../../utility/validateInput";
import React, { useState } from "react";
import Header from "../../components/ui/Header";
import profile from "../../assets/profile.png";
import { createProfile } from "../../utility/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../../components/ui/ProfileForm";
import { useCookies } from "react-cookie";

export default function SetProfile() {
  const { onChange, values, errors } = useForm(
    {
      name: "",
      major: "",
      selfIntro: "",
      age: "",
    },
    validateInput
  );
  const [mbti, setMBTI] = useState("ESTP");
  const [number, setNumber] = useState(20);
  const [image, setImage] = useState([]);
  const [img, setImg] = useState(null);
  const formData = new FormData();

  const mutation = useMutation({ mutationFn: createProfile });
  const [cookies] = useCookies(["JSESSIONID"]);
  const navigate = useNavigate();
  console.log(localStorage.getItem("JSESSIONID"));

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("nickname", values.name);
    formData.append("major", values.major);
    formData.append("introduction", values.selfIntro);
    formData.append("age", number);
    formData.append("mbti", mbti);
    formData.append("profileImage", img);
    mutation.mutate(
      {
        formData: formData,
        JSESSIONID: localStorage.getItem("JSESSIONID"),
      },
      {
        onSuccess: () => {
          alert("생성 성공!");
          navigate("/");
        },
        onError: () => {
          alert("생성 실패!");
        },
      }
    );
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center bg-white"></div>
      <ProfileForm
        handleSubmit={handleSubmit}
        image={image}
        setImage={setImage}
        onChange={onChange}
        values={values}
        errors={errors}
        number={number}
        setNumber={setNumber}
        mbti={mbti}
        setMBTI={setMBTI}
        setImg={setImg}
      ></ProfileForm>
    </div>
  );
}
