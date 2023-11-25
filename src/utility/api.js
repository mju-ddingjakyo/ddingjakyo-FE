import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:8080/api",
});

export async function login(formData) {
  return await api.post(`/login`, formData);
}

export async function logout() {
  return await api.post("/logout");
}

export async function register(email, gender, password) {
  console.log(email, gender, password);
  return await api.post("/register", {
    email: `${email}`,
    gender: `${gender}`,
    password: `${password}`,
  });
}

export async function emailCertification(email) {
  return await api.post(`/email_certification?email=${email}`);
}

export async function emailConfirm(email, authCode) {
  return await api.post(`/email_certification/confirm`, {
    email: `${email}`,
    authCode: `${authCode}`,
  });
}

export async function createProfile(profileData) {
  return await api.post("/api/member", profileData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function getAllTeams() {
  return await api.get("/teams");
}

export async function getTeamDetail(teamId) {
  return await api.get(`/team/${teamId}`);
}

export async function getMyTeam() {
  console.log("getMyTeam API 실행됨");
  return await api.get(`/team/my`);
}

export async function createMyTeam(teamData) {
  return await api.post("/team", teamData);
}

export async function updateTeam(teamData) {
  return await api.post("/team", teamData);
}

export async function deleteTeam(teamData) {
  return await api.post("/team", teamData);
}

export async function getMy() {
  return await api.get("/member/my");
}

export async function getMemberByID(id) {
  return await api.get(`/member/${id}`);
}

export async function getMemberByEmail(email) {
  return await api.get(`/member?email=${email}`);
}

export async function updateProfile(profileData) {
  return await api.put("/member", profileData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function deleteMember() {
  return await api.delete("/member");
}

export async function proposal(receiveTeamId, kakaoRoomURL) {
  return await api.post("/proposal", {
    receiveTeamId: receiveTeamId,
    kakaoRoomURL: kakaoRoomURL,
  });
}

export async function acceptProposal(sendTeamId, mathchingResult) {
  return await api.post("/proposal", {
    sendTeamId: `${sendTeamId}`,
    mathchingResult: `${mathchingResult}`,
  });
}

export async function rejectProposal(sendTeamId, mathchingResult) {
  return await api.post("/proposal", {
    sendTeamId: `${sendTeamId}`,
    mathchingResult: `${mathchingResult}`,
  });
}

export async function getSendProposal() {
  return await api.get(`/proposal/send-proposal`);
}

export async function getReceiveProposal() {
  return await api.get(`/proposal/receive-proposals`);
}

export async function getCompleteProposal() {
  return await api.get(`/proposal/complete-proposal`);
}
