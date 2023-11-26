import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Join from "./pages/auth/Join";
import SetProfile from "./pages/auth/SetProfile";
import MyTeam from "./pages/team/MyTeam";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Match from "./pages/Match";
import TeamDetail from "./pages/team/TeamDetail";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: false,
      },

    },
  });
  return (
    <div className="App">
      <div className="w-[632px] h-screen m-0 m-auto bg-slate-50">
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/team/:id" element={<TeamDetail />} />
                <Route path="/profile" element={<SetProfile />} />
                <Route path="/myteam" element={<MyTeam />} />
                <Route path="/proposal/:params" element={<Match />} />
                <Route path="/mypage" element={<MyPage />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </CookiesProvider>
      </div>
    </div>
  );
}

export default App;
