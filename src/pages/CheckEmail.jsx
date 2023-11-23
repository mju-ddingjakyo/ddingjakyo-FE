import Input from "../components/Input";

export default function CheckEmail() {
  return (
    <div className="flex justify-center">
      <form className="p-5 flex flex-col  bg-white rounded-lg" noValidate>
        <div className="flex items-center -mb-4">
          <Input
            labelText={"패스워드"}
            type={"password"}
            name={"password"}
            placeHolder={"인증 코드를 확인해주세요."}
          />
        </div>
        <div className="flex items-center flex-col">
          <div className="flex justify-between mb-7 ml-3 mr-3">
            <div className="mr-12">인증코드를 받지 못하셨나요?</div>
            <div>[ 인증코드 재발송 ]</div>
          </div>
          <button
            type="submit"
            className="w-[130px] h-10 text-white text-m bg-violet-400 rounded-lg p-2 hover:bg-violet-200"
          >
            인증하기
          </button>
        </div>
      </form>
    </div>
  );
}
