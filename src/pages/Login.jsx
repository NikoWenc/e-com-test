import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import loginAuth from "../utils/loginAuth";

function Login() {
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    async function checkAuth() {
      try {
        const req = await loginAuth("mor_2314", "83r5^_");
        const token = await req.json();
        if (token) {
          login(token);
        }
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Auth check aborted");
        } else {
          console.error("Auth Check Error:", err.message);
        }
      }
    }
    checkAuth();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="login-form flex flex-col gap-6 w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-slate-600 text-sm">Sign in to your account</p>
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="user" className="text-sm font-medium text-slate-700">
            Username
          </label>
          <input
            id="user"
            type="text"
            placeholder="Enter your username"
            className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 shadow-md hover:shadow-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;
