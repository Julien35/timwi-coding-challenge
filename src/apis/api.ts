import Axios from "axios";

const instance = Axios.create({
  baseURL: process.env.VUE_APP_SPOTIFY_URL,
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + process.env.VUE_APP_SPOTIFY_TOKEN,
  },
});

export default instance;
