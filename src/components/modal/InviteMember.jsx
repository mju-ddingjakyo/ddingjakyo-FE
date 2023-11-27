import { useMutation, useQuery } from "@tanstack/react-query";
import { getMemberByEmail } from "../../utility/api";
import { useEffect, useState } from "react";
import Profile from "../ui/Profile";
export default function InviteMember({
  closeModal,
  inviteMembers,
  setInviteMembers,
}) {
  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  localStorage.getItem("JSESSIONID")
  const { data, error } = useQuery({
    queryKey: ["search", email],
    queryFn: () => getMemberByEmail({ email: email, JSESSIONID: localStorage.getItem("JSESSIONID") }),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (error?.response.status === 400) alert("해당 이메일이 존재하지 않습니다!")
    data ? setUser(data.data.data) : setUser();
  };

  useEffect(() => {

  }, [data, error]);
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="w-[480px] h-[700px] absolute top-[50px] rounded-[27px] flex flex-col items-center bg-white">
          <form onSubmit={handleSubmit}>
            <label className="relative">
              <input
                placeholder="이름 또는 이메일 검색"
                className=" outline-none h-[65px] w-[480px] rounded-t-[27px] bg-[#f7f7f5] border-[#cbcbcb] text-xl pl-5"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <button className="left-[370px] translate-y-2.5 absolute rounded-[20px] w-[90px] h-[45px] text-l bg-[#432da2] font-bold text-center text-white">
                검색
              </button>
            </label>
          </form>
          {user ? (
            <div className="flex flex-col mt-10 items-center">
              <Profile
                img={user.profileImage}
                email={user.email}
                name={user.nickname}
              ></Profile>
              <button
                type="button"
                onClick={() => {
                  setInviteMembers([...inviteMembers, user]);
                  setUser();
                  closeModal(true)
                }}
                className="bg-violet-600 w-24 p-3 rounded-lg text-white"
              >
                추가하기
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
