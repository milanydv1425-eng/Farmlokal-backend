import axios from "axios";

export const fetchExternalData = async () => {
  return axios.get("https://dummyjson.com/products", {
    timeout: 3000,
  });
};
