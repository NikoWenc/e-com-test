import axios from "axios";

async function loginAuth({ username, password }) {
  const response = await axios.post("https://fakestoreapi.com/auth/login", {
    username,
    password,
  });
  return response.data;
}

export default loginAuth;
