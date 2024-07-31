import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f56623fb7af84c36a5cdb20c75787944",
  },
});
