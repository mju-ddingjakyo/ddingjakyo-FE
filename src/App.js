import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
import SetProfile from "./pages/SetProfile";
import MyTeam from "./pages/MyTeam";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Match from "./pages/Match";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <div className="w-[632px] h-screen m-0 m-auto bg-slate-50">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/team/:id" element={<></>} />
              <Route path="/profile" element={<SetProfile />} />
              <Route path="/myteam" element={<MyTeam />} />
              <Route path="/match" element={<Match />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
