import React, { useState } from "react";

import useForm from "../../customHook/useForm";
import validateInput from "../../utility/validateInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../../utility/api";
import ProfileForm from "../ui/ProfileForm";
export default function ModifyProfile({ closeModal, userData }) {
  const { onChange, values, errors } = useForm(
    {
      name: userData.nickname,
      major: userData.major,
      selfIntro: userData.introduction,
      age: userData.age.toString(),
    },
    validateInput
  );
  const [mbti, setMBTI] = useState(userData.mbti);
  const [number, setNumber] = useState(userData.age);
  const [image, setImage] = useState(userData.profileImage);
  const formData = new FormData();
  const mutation = useMutation({ mutationFn: updateProfile });
  const queryClient = useQueryClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("nickname", values.name);
    formData.append("major", values.major);
    formData.append("introduction", values.selfIntro);
    formData.append("age", number);
    formData.append("mbti", mbti);
    formData.append("profileImage", image);
    mutation.mutate(
      {
        profileData: formData,
      },
      {
        onSuccess: () => {
          alert("수정 성공!");
          queryClient.invalidateQueries("myInfo");
          closeModal(true);
        },
        onError: () => {
          alert("생성 실패!");
        },
      }
    );
  };

  return (
    <div>
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
      ></ProfileForm>
    </div>
  );
}
