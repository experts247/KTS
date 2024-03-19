import axios from "axios";

const adminAxios = axios.create({
  baseURL: "your backend url",
});

export default adminAxios;
