import api from './api-helper';

export const getAllEntries = async () => {
  const resp = await api.get('/entries');
  return resp.data;
};

export const getOneEntry = async (id) => {
  const resp = await api.get(`/entries/${id}`);
  return resp.data;
}

export const postEntry = async (entryData) => {
  const resp = await api.post('/entries', { entry: entryData })
  return resp.data;
}

export const putEntry = async (id, entryData) => {
  const resp = await api.put(`/entries/${id}`, { entry: entryData })
  return resp.data;
}

export const deleteEntry = async (id) => {
  const resp = await api.delete(`/entries/${id}`);
  return resp
}