function loginAuth(name, password) {
  const credentials = { username: name, password: password };
  const token = fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return token;
}

export default loginAuth;
