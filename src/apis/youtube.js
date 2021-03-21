import axios from "axios";

const KEY = "AIzaSyCFdyulsgfzk-1BAtiLmA9gEeXO8R-x1SA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "videos",
    maxResults: 5,
    key: KEY,
  },
});
