import axios from "axios";

export const API = axios.create({
  baseURL: "https://blogwebsite-satanizm1013-gmailcom.vercel.app/",
  headers: {
    "Authorization": localStorage.getItem("token") || ""
  },
});