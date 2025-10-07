import React, { useState } from "react";
import supabase from "./supabase";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful!");
      console.log("User:", data.user);
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-6">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md text-white border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <p className="text-center text-green-100 mb-8">
          Welcome back! Access your dashboard below.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex items-center bg-white/10 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-white/40">
            <Mail size={20} className="text-green-200 mr-3" />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent w-full outline-none text-white placeholder-green-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center bg-white/10 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-white/40">
            <Lock size={20} className="text-green-200 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent w-full outline-none text-white placeholder-green-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-white text-green-700 font-semibold py-2 rounded-xl shadow-md hover:bg-green-50 transition-all"
          >
            <LogIn size={18} />
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-green-100">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-white font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
