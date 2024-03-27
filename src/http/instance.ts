import axios from "axios";
const url = import.meta.env.VITE_API;
const instance = axios.create({
  baseURL:`${url}`
})

export default instance