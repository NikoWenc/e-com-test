async function loginAuth({ username, password }) {
  const token = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!token.ok) {
    throw new Error("Login failed");
  }

  const tokenData = await token.json();
  return tokenData;
}

export default loginAuth;
