import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-72de4-default-rtdb.firebaseio.com",
});

export default journalApi;
