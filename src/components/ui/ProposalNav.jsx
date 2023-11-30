import React from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function ProposalNav() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around my-5">
            <NavLink to={"/proposal/send-proposal"}
                className={({ isActive }) =>
                    isActive ? "text-2xl font-bold cursor-pointer" : "text-2xl font-bold cursor-pointer text-slate-400"
                }
            >
                보낸 신청
            </NavLink>
            <NavLink to={"/proposal/receive-proposals"}
                className={({ isActive }) =>
                    isActive ? "text-2xl font-bold cursor-pointer" : "text-2xl font-bold cursor-pointer text-slate-400"
                }
            >
                받은 신청
            </NavLink>
            <NavLink to={"/proposal/complete-proposal"}
                className={({ isActive }) =>
                    isActive ? "text-2xl font-bold cursor-pointer" : "text-2xl font-bold cursor-pointer text-slate-400"
                }
            >
                매칭 성공
            </NavLink>
        </div>
    )
}
