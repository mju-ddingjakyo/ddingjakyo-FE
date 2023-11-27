import React from "react";
import Profile from "./Profile";
import ProposalNav from "./ProposalNav";
import Header from "./Header";


export default function SendProposalUI({ teamData }) {
    console.log(teamData)
    let status, background;

    if (teamData?.matchStatus === "REJECTED") {
        status = (
            <div className="ml-32 flex pb-10 flex-col items-center w-[213px] h-[70px] rounded-[17px]  bg-slate-200">
                <p className="text-[30px] mt-3 font-bold text-[#6A6A6A]">거절됨</p>
            </div>
        );

        background = "bg-gradient-to-b from-white to-black";
    } else if (teamData?.matchStatus === "WAITING") {
        status = (
            <div className="ml-32 flex pb-10 flex-col items-center w-[213px] h-[70px] rounded-[17px] bg-[#e3d97e20]">
                <p className="text-[30px] mt-3 font-bold text-[#bea348]">대기중</p>
            </div>
        );

        background = "bg-gradient-to-b from-white to-[#fffa79]/[0.64]";
    } else if (teamData?.matchStatus === "APPROVED") {
        status = (
            <div className="ml-32 flex pb-10 flex-col items-center w-[213px] h-[70px] rounded-[17px] bg-[#deffeb]">
                <p className="text-[30px] mt-3 font-bold text-[#00a925b5]">수락</p>
            </div>
        );
        background = "bg-gradient-to-b from-white to-[#b5ff92]";
    }

    return (
        <>
            <Header></Header>
            <ProposalNav></ProposalNav>
            <div className={`relative h-1/2 ${background}`}>
                <div className="pl-10 pt-40 flex items-center content-center">
                    <div className="text-[#7E7E7E] text-xl mr-5 font-bold mt-5 self-start">
                        {teamData?.receiveTeam.name}
                    </div>
                    <p className="text-[#7E7E7E] text-xl mr-5 font-bold mt-5 self-start">
                        {" "}
                        |{" "}
                    </p>
                    <div className="text-[#7E7E7E] text-xl font-bold mt-5 self-start">
                        인원 {teamData?.receiveTeam.memberCount}명
                    </div>
                    {status}
                </div>

                <div className="absolute w-full h-[600px] top-60 bg-[#FFFFFF] rounded-tl-[45px] rounded-tr-[45px] p-5">
                    <div className="text-zinc-600 text-xl border-b-2 pb-5 border-zinc-400">
                        {teamData?.receiveTeam.content}
                    </div>
                    <div className="h-[500px] overflow-y-auto scrollbar mt-5">
                        {teamData?.receiveTeam.membersResponse.map((member) => (
                            <Profile
                                img={member.profileImage}
                                name={member.nickname}
                                major={member.major}
                                age={member.age}
                                mbti={member.mbti}
                                introduction={member.introduction}
                            ></Profile>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}