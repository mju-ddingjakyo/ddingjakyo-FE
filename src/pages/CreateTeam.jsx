import Icon from "../components/Icon";
import IconButton from "../components/IconButton";
import logo from "../assets/logo.svg";
import createTeam from "../assets/createTeam.svg";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import useModal from "../customHook/useModal";
import SetTeam from "./SetTeam";
import Header from "../components/Header";

export default function CreateTeam() {
  const { visibility, openModal, closeModal } = useModal();
  return (
    <>
      <Header></Header>
      <div className="flex flex-col items-center pt-[180px]">
        <Icon iconName={createTeam} width={"w-[100px]"} />
        <span className="pt-[30px] text-3xl font-bold">아직 팀이 없어요!</span>
        <p className="pt-[10px] w-96 text-xl font-medium text-center text-[#878787]">
          <span className="w-96 text-xl font-medium text-center text-[#878787]">
            나의 팀을 만들고, 띵작교에서
          </span>
          <br />
          <span className="w-96 text-xl font-medium text-center text-[#878787]">
            새로운 만남을 경험해보세요.
          </span>
        </p>
        <button
          onClick={openModal}
          className="w-[286px] h-14 mt-5 text-violet-800 text-xl bg-violet-100 rounded-lg p-2 hover:bg-violet-200 font-bold"
        >
          + 팀 만들기
        </button>
      </div>

      <Modal closeModal={closeModal} visibility={visibility}>
        <SetTeam closeModal={closeModal}></SetTeam>
      </Modal>

      <Footer></Footer>
    </>
  );
}
