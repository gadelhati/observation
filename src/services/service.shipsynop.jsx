import api from "../api/axios";

const getRetrieve = () => {
  return api.get("/observation/retrieve");
};

const getAll = () => {
  return api.get("/observation");
};

const create = data => {
  return api.post("/observation", data);
};

const retrieve = id => {
  return api.get(`/observation/${id}`);
};

const update = (id, data) => {
  return api.put(`/observation/${id}`, data);
};

const remove = id => {
  return api.delete(`/observation/${id}`);
};

const removeAll = () => {
  return api.delete(`/observation`);
};

const findBySource = source => {
  return api.get(`/observation?source=${source}`);
};

const ShipSynopService = {
  getRetrieve,
  getAll,
  create,
  retrieve,
  update,
  remove,
  removeAll,
  findBySource
};

export default ShipSynopService;