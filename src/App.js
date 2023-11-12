import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
import SetProfile from "./pages/SetProfile";
import SetTeam from "./pages/CreateTeam";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Match from "./pages/Match";

function App() {
  return (
    <div className="App">
      <div className="w-[632px] h-screen  m-0 m-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/team/:id" element={<></>} />
            <Route path="/profile" element={<SetProfile />} />
            <Route path="/myteam" element={<SetTeam />} />
            <Route path="/match" element={<Match />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
