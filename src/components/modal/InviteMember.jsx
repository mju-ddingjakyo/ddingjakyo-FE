import { useMutation, useQuery } from "@tanstack/react-query";
import { getMemberByEmail } from "../../utility/api";
import { useEffect, useState } from "react";
import Profile from "../ui/Profile";
export default function InviteMember({
  closeModal,
  membersEmail,
  setMembersEmail,
}) {
  const [email, setEmail] = useState("");
  const [enable, setEnable] = useState(false);
  const [user, setUser] = useState();

  const { data } = useQuery({
    queryKey: ["getByEmail"],
    queryFn: () => getMemberByEmail(email),
    enabled: enable,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnable(true);
  };

  useEffect(() => {
    data ? setUser(data) : setUser();
  }, [data]);

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
                name={user.nickname}
                major={user.major}
                age={user.age}
                mbti={user.mbti}
                introduction={user.introduction}
              ></Profile>
              <button
                type="button"
                onClick={() => {
                  setUser();
                  setMembersEmail([...membersEmail, email]);
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
