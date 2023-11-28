import React from "react";
import Header from "../../components/ui/Header";
import ProposalNav from "../../components/ui/ProposalNav";
export default function NoTeam({ message, submessage }) {
    return (
        <>
            <Header></Header>
            <ProposalNav></ProposalNav>
            <div className="flex flex-col items-center pt-[200px]">
                <span className="pt-[30px] text-3xl font-bold">
                    아직 {message} 없어요!
                </span>
                <p className="pt-[10px] w-96 text-xl font-medium text-center text-[#878787]">
                    <span className="w-96 text-xl font-medium text-center text-[#878787]">
                        {submessage}
                    </span>
                    <br />
                    <span className="w-96 text-xl font-medium text-center text-[#878787]"></span>
                </p>
            </div>
        </>
    );
}