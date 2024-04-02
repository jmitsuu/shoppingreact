import axios from "axios";
// const url = import.meta.env.VITE_API;
const instance = axios.create({
  baseURL:`https://shoppingoriaj.com.jairo3478.c35.integrator.host`
})

export default instance