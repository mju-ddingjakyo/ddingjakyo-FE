import Input from "../components/Input";
import useForm from "../customHook/useForm";
import GenderCheck from "../components/GenderCheck";
import React, { useState } from "react";
import NumberInput from "../components/NumberInput";
import validateInput from "../utility/validateInput";

export default function SetTeam() {
  const { onChange, values, errors, handleSubmit } = useForm(
    {
      teamName: "",
      teamIntro: "",
    },
    validateInput
  );

  const [gender, setGender] = useState(0);
  const [number, setNumber] = useState(2);

  return (
    <div className="flex flex-col items-center ">
      <div className="w-[632px] h-screen bg-white flex flex-col items-center ">
        <div
          className="pt-[10px] w-[511px] h-[700px] absolute  top-[50px] rounded-[27px] flex flex-col items-center bg-white"
          style={{ boxShadow: "0px 4px 20px 0 rgba(0,0,0,0.2)" }}
        >
          <form
            className="p-5 flex flex-col items-center bg-white rounded-lg text-xl font-bold mt-4 "
            onSubmit={handleSubmit}
            noValidate
          >
            <Input
              labelText={"팀 이름"}
              type={"teamName"}
              name={"teamName"}
              placeHolder={"팀의 이름을 지어주세요."}
              onChange={onChange}
              value={values.email}
              errorMessage={errors.teamName}
            />

            <GenderCheck setGender={setGender} />

            <p className="flex mt-12 w-full ">
              <p className="text-xl font-bold flex flex-col w-full ">인원</p>
              <NumberInput
                setNumber={setNumber}
                number={number}
                maxNumber={5}
                minNumber={2}
              ></NumberInput>
            </p>

            <p className="w-full flex flex-col  mt-12 mb-12 ">
              <label className="text-black pb-2 font-semibold">멤버</label>
              <button
                type="button"
                className=" text-violet-500 text-m bg-violet-200 w-1/3 rounded-lg p-2 hover:bg-violet-100"
              >
                + 멤버추가
              </button>
            </p>

            <Input
              labelText={"팀 소개"}
              type={"teamIntro"}
              name={"teamIntro"}
              placeHolder={"팀을 소개해주세요."}
              onChange={onChange}
              value={values.teamIntro}
              errorMessage={errors.teamIntro}
            />

            <button
              type="submit"
              className="w-[186px] h-14 mt-8 text-white text-xl bg-violet-800 rounded-lg p-2 hover:bg-violet-400"
            >
              완료
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
