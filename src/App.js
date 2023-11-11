import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Join from "./pages/Join";
import SetProfile from "./pages/SetProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/team/:id" element={<></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/profile" element={<SetProfile />} />
          <Route path="/myteam" element={<></>} />
          <Route path="/match" element={<></>} />
          <Route path="/mypage" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
