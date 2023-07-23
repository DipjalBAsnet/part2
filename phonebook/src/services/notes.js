import axios from "axios";

const url = "http://localhost:3001/personslist";

const create = (newList) => {
  return axios.post(url, newList).then((response) => response.data);
};

const getAll = () => {
  return axios.get(url).then((response) => response.data);
};

const remove = (id) => {
  return axios.delete(`${url}/${id}`).then((response) => response.data);
};

export default {
  create,
  getAll,
  remove,
};
