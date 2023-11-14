import Input from "../components/Input";
import useForm from "../customHook/useForm";
import validateInput from "../utility/validateInput";
import MBTICheck from "../components/MBTICheck";
import React, { useState } from "react";
import Header from "../components/Header";
import NumberInput from "../components/NumberInput";
import profile from "../assets/profile.png";

export default function SetProfile() {
  const { onChange, values, errors, handleSubmit } = useForm(
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
  const [image, setImage] = useState(profile);

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage(image);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="mt-3 px-14 py-5 rounded-[27px] shadow-2xl">
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit}
            noValidate
          >
            <p className="text-xl pt-[10px] ">새 프로필 생성</p>

            <input
              type="file"
              className="hidden"
              accept="image/gif, image/jpeg, image/png"
              id="profilePictureInput"
              onChange={uploadImage}
            />
            <label
              htmlFor="profilePictureInput"
              className="cursor-pointer text-xs text-left pt-[10px] text-[#442da3]"
            >
              <img
                src={image}
                alt="프로필 이미지"
                className="rounded-full aspect-square w-[150px]"
              ></img>
            </label>
            <Input
              labelText={"이름"}
              type={"name"}
              name={"name"}
              placeHolder={"이름을 입력하세요"}
              onChange={onChange}
              value={values.name}
              errorMessage={errors.name}
            />

            <Input
              labelText={"학과"}
              type={"major"}
              name={"major"}
              placeHolder={"학과를 입력하세요"}
              onChange={onChange}
              value={values.major}
              errorMessage={errors.major}
            />
            <Input
              labelText={"소개글"}
              type={"selfIntro"}
              name={"selfIntro"}
              placeHolder={"소개글을 입력하세요"}
              onChange={onChange}
              value={values.selfIntro}
              errorMessage={errors.selfIntro}
            />
            <div className="w-full flex items-center justify-between mb-10">
              <div className="text-black text-xl font-bold">나이</div>
              <NumberInput
                number={number}
                setNumber={setNumber}
                maxNumber={30}
                minNumber={20}
              ></NumberInput>
            </div>
            <MBTICheck mbti={mbti} setMBTI={setMBTI} />

            <button
              type="submit"
              className="w-[186px] h-14 mt-8 text-white text-xl bg-violet-800 rounded-lg p-2 hover:bg-violet-400"
            >
              생성하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
