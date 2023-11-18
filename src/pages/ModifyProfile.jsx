import React, { useState } from "react";
import Input from "../components/Input";
import useForm from "../customHook/useForm";
import validateInput from "../utility/validateInput";
import MBTICheck from "../components/MBTICheck";
import NumberInput from "../components/NumberInput";

export default function ModifyProfile() {
  const userData = {
    data: {
      nickname: "김융소",
      major: "융합소프트웨어학부",
      introduction: "안녕하세요. 융소의 자랑 김융소입니다.",
      age: 21,
      mbti: "ISTJ",
      profileImage: "https://via.placeholder.com/90x90",
    },
  };

  const { onChange, values, errors, handleSubmit } = useForm(
    {
      name: userData.data.nickname,
      major: userData.data.major,
      selfIntro: userData.data.introduction,
      age: userData.data.age.toString(),
    },
    validateInput
  );

  const [mbti, setMBTI] = useState(userData.data.mbti);
  const [number, setNumber] = useState(userData.data.age);
  const [image, setImage] = useState(userData.data.profileImage);

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className="flex justify-center bg-white rounded-[27px]">
        <div className="mt-3 px-14 py-5 rounded-[27px] shadow-2xl">
          <form
            className="flex flex-col items-center"
            onSubmit={handleSubmit}
            noValidate
          >
            <p className="text-xl pt-[10px]">프로필 수정</p>

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
              />
            </label>
            <Input
              labelText={"이름"}
              type={"name"}
              name={"name"}
              placeHolder={"이름을 입력하세요"}
              onChange={onChange}
              defaultValue={userData.data.nickname}
              errorMessage={errors.name}
            />

            <Input
              labelText={"학과"}
              type={"major"}
              name={"major"}
              placeHolder={"학과를 입력하세요"}
              onChange={onChange}
              defaultValue={userData.data.major}
              errorMessage={errors.major}
            />
            <Input
              labelText={"소개글"}
              type={"selfIntro"}
              name={"selfIntro"}
              placeHolder={"소개글을 입력하세요"}
              onChange={onChange}
              defaultValue={userData.data.introduction}
              errorMessage={errors.selfIntro}
            />
            <div className="w-full flex items-center justify-between mb-10">
              <div className="text-black text-xl font-bold">나이</div>
              <NumberInput
                number={number}
                setNumber={setNumber}
                maxNumber={30}
                minNumber={20}
              />
            </div>
            <MBTICheck mbti={mbti} setMBTI={setMBTI} />

            <button
              type="submit"
              className="w-[186px] h-14 mt-8 text-white text-xl bg-violet-800 rounded-lg p-2 hover:bg-violet-400"
            >
              수정하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
