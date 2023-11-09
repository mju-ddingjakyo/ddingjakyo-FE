import Icon from "../components/Icon";

import IconButton from "../components/IconButton";

export default function CreateTeam() {
  return (
    <div className="flex flex-col items-center bg-[#f9fafd]">
      <div className="w-[632px] h-screen bg-white">
        <div className="w-[632px] h-[81px] bg-[#432da2]">
          <IconButton className="ml-[17px] pt-[17px] flex flex-wrap">
            <Icon iconName="logo" width="40" />
            <div className="ml-[10px] mt-[2px] text-4xl text-left text-white">
              띵작교
            </div>
          </IconButton>
        </div>
        <div className="flex flex-col items-center pt-[180px]">
          <Icon iconName={"team"} width={"w-[100px]"} />
          <span className="pt-[30px] text-3xl font-bold">
            아직 팀이 없어요!
          </span>
          <p className="pt-[10px] w-96 text-xl font-medium text-center text-[#878787]">
            <span className="w-96 text-xl font-medium text-center text-[#878787]">
              나의 팀을 만들고, 띵작교에서
            </span>
            <br />
            <span className="w-96 text-xl font-medium text-center text-[#878787]">
              새로운 만남을 경험해보세요.
            </span>
          </p>
          <button className="w-[286px] h-14 mt-5 text-violet-800 text-xl bg-violet-100 rounded-lg p-2 hover:bg-violet-200 font-bold">
            + 팀 만들기
          </button>
        </div>
      </div>
    </div>
  );
}
