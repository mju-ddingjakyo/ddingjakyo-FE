import Input from "../input/Input";
import useForm from "../../customHook/useForm";
import GenderCheck from "../input/GenderCheck";
import React, { useEffect, useState } from "react";
import NumberInput from "../input/NumberInput";
import validateInput from "../../utility/validateInput";
import useModal from "../../customHook/useModal";
import Modal from "./Modal";
import InviteMember from "./InviteMember";
import { updateTeam } from "../../utility/api";
import { useMutation } from "@tanstack/react-query";

export default function ModifyTeam({ teamData }) {
    const mutation = useMutation({
        mutationFn: updateTeam
    }, {
        onSuccess: () => {
            alert("수정 성공!")
        },
        onError: (err) => {
            console.log(err)
        }
    })
    const { visibility, openModal, closeModal } = useModal();
    const { onChange, values, errors } = useForm(
        {
            teamName: teamData.name,
            teamIntro: teamData.content,
        },
        validateInput
    );
    const [number, setNumber] = useState(teamData?.memberCount);
    const [gender, setGender] = useState(teamData?.gender);
    const [inviteMembers, setInviteMembers] = useState(teamData?.membersResponse);
    const [memberEmail, setMemberEmail] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const teamData = {
            name: values.teamName,
            gender: gender,
            content: values.teamIntro,
            memberCount: number,
            membersEmail: memberEmail,
        };

        mutation.mutate({
            JSESSIONID: localStorage.getItem("JESSIONID"),
            teamData: teamData,
        });
    };

    return (
        <div className="flex flex-col items-center ">
            <div
                className="pt-[10px] w-[511px] h-[800px] absolute  top-[50px] rounded-[27px] flex flex-col items-center bg-white"
                style={{ boxShadow: "0px 4px 20px 0 rgba(0,0,0,0.2)" }}
            >
                <form
                    className="p-5 flex flex-col items-center rounded-lg text-xl font-bold mt-4 "
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
                        defaultValue={teamData.name}
                    />

                    <GenderCheck setGender={setGender} />

                    <div className="flex mt-12 w-full ">
                        <div className="text-xl font-bold flex flex-col w-full ">인원</div>
                        <NumberInput
                            setNumber={setNumber}
                            number={number}
                            maxNumber={5}
                            minNumber={2}
                        ></NumberInput>
                    </div>

                    <div className="w-full mt-12 mb-12 ">
                        <div className="flex justify-between">
                            <label
                                className="text-black pb-2 font-semibold"
                                htmlFor="memberButton"
                            >
                                멤버
                            </label>
                            <button
                                onClick={openModal}
                                id="memberButton"
                                type="button"
                                className=" text-violet-500 text-m bg-violet-200 w-1/3 rounded-lg p-2 hover:bg-violet-100"
                            >
                                + 멤버추가
                            </button>
                        </div>
                        <div className="mt-7 flex">
                            {inviteMembers.map((member) => (
                                <div className="mr-5">
                                    <img className="w-14 h-14 rounded-full" src={`${member.profileImage}`}></img>
                                    <div className="text-xl font-xs">{member.nickname}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Input
                        labelText={"팀 소개"}
                        type={"text"}
                        name={"teamIntro"}
                        placeHolder={"팀을 소개해주세요."}
                        onChange={onChange}
                        value={values.teamIntro}
                        defaultValue={teamData.content}
                    />

                    <button
                        type="submit"
                        className="w-[186px] h-14 mt-8 text-white text-xl bg-violet-800 rounded-lg p-2 hover:bg-violet-400"
                    >
                        완료
                    </button>
                </form>
            </div>
            <Modal closeModal={closeModal} visibility={visibility}>
                <InviteMember
                    closeModal={closeModal}
                    inviteMembers={inviteMembers}
                    setInviteMembers={setInviteMembers}
                ></InviteMember>
            </Modal>
        </div>
    );
}
