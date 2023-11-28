import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true
});

export async function login({ formData }) {
  return await api.post('/login', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function logout() {
  return await api.post('/logout');
}

export async function register(registerData) {
  try {
    return await api.post('/register', registerData);
  } catch (error) {
    console.log('API error', error);
    throw error;
  }
}

export async function emailCertification(email) {
  return await api.post(`/email_certification?email=${email}`);
}

export async function emailConfirm(confirmData) {
  return await api.post(`/email_certification/confirm`, confirmData);
}

export async function createProfile({ formData, JSESSIONID }) {
  return await api.post("/member", formData, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function getAllTeams() {
  return await api.get('/teams');
}

export async function getTeamDetail({ teamId, JSESSIONID }) {
  return await api.get(`/team/${teamId}`, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
  });
}

export async function getMyTeam(JSESSIONID) {
  console.log('getMyTeam API 실행됨');
  return await api.get(`/team/my`, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
    withCredentials: true,


  });
}

export async function createMyTeam({ teamData, JSESSIONID }) {
  console.log(teamData);
  return await api.post('/team', teamData, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
  });
}

export async function updateTeam({ teamData, JSESSIONID }) {
  return await api.put('/team', teamData, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
  });
}

export async function deleteTeam({ teamData, JSESSIONID }) {
  return await api.delete('/team', teamData, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
  });
}

export async function getMy(JSESSIONID) {
  return await api.get('/member/my', {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
  });
}

export async function getMemberByID(id) {
  return await api.get(`/member/${id}`);
}

export async function getMemberByEmail({ email, JSESSIONID }) {
  return await api.get(`/member/search?email=${email}`, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    }
  });
}

export async function updateProfile({ formData, JSESSIONID }) {
  return await api.put('/member', formData, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function deleteMember() {
  return await api.delete('/member');
}

export async function proposal({ proposalData, JSESSIONID }) {
  return await api.post('/proposal', proposalData, {
    headers: {
      Authorization: 'JSESSIONID' + JSESSIONID,
    },
  });
}

export async function acceptProposal({ proposalData, JSESSIONID }) {
  return await api.patch('/proposal', proposalData, {
    headers: {
      Authorization: 'JSESSIONID' + JSESSIONID,
    },
  });
}

export async function rejectProposal({ proposalData, JSESSIONID }) {
  return await api.patch('/proposal', proposalData, {
    headers: {
      Authorization: 'JSESSIONID' + JSESSIONID,
    },
  });
}

export async function getSendProposal(JSESSIONID) {
  return await api.get(`/proposal/send-proposal`, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
  });
}

export async function getReceiveProposal(JSESSIONID) {
  return await api.get(`/proposal/receive-proposals`, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
  });
}

export async function getCompleteProposal(JSESSIONID) {
  console.log(JSESSIONID);
  return await api.get(`/proposal/complete-proposal`, {
    headers: {
      Authorization: 'JSESSIONID ' + JSESSIONID,
    },
  });
}
