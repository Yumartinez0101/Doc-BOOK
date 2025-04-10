import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/offer");
        toast.success("Log In Success");
      })
      .catch((error) => {
        console.error("Login failed", error);
        toast.error("Logged failed");
      });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#080e01" }}
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-[#1a1f12] rounded-lg shadow-md">
        <h2
          className="text-2xl font-bold text-center"
          style={{ color: "#f1fddb" }}
        >
          Login
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#bef96f] focus:border-[#bef96f] focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#bef96f] focus:border-[#bef96f] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`group relative flex w-full justify-center py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-[#080e01] bg-[#bef96f] hover:bg-[#9ee054] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bef96f]`}
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm" style={{ color: "#f1fddb" }}>
            Not a user?{" "}
            <Link
              to="/register"
              className="font-medium text-[#bef96f] hover:text-[#9ee054]"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
