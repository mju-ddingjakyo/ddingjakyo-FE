import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProposalNav() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around my-5">
            <div
                onClick={() => {
                    navigate("/proposal/send-proposal");
                }}
                className="text-2xl font-bold cursor-pointer"
            >
                보낸 신청
            </div>
            <div
                onClick={() => {
                    navigate("/proposal/receive-proposals");
                }}
                className="text-2xl font-bold cursor-pointer"
            >
                받은 신청
            </div>
            <div
                onClick={() => {
                    navigate("/proposal/complete-proposal");
                }}
                className="text-2xl font-bold cursor-pointer"
            >
                매칭 완료
            </div>
        </div>
    )
}
