import axios from "axios";

export default axios.create({
  baseURL: "https://en.wikipedia.org",
  //baseURL: "https://en.wikipedia.org/",
  params: {}
});

//you can also create a function that would abstract everything
