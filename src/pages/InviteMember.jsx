export default function InviteMember() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div
          className="pt-[0px] w-[480px] h-[700px] absolute  top-[50px] rounded-[27px] flex flex-col items-center bg-white"
          style={{ boxShadow: "0px 4px 20px 0 rgba(0,0,0,0.2)" }}
        >
          <form>
            <label className="relative">
              <input
                placeholder="이름 또는 이메일 검색"
                className=" outline-none h-[65px] w-[480px] rounded-t-[27px] bg-[#f7f7f5] border-[#cbcbcb] text-xl pl-5"
              />

              <button className="left-[370px] translate-y-2.5 absolute rounded-[20px] w-[90px] h-[45px] text-l bg-[#432da2] font-bold text-center text-white">
                초대
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
