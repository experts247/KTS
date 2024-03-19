import axios from "axios";

const userAxios = axios.create({
  baseURL: "add your your back end url",
});

export default userAxios;
