export default function NotTeam({ message, submessage }) {
  return (
    <>
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
