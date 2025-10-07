import React, { useState } from "react";
import supabase from "./supabase";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, UserPlus } from "lucide-react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful! Please check your email to confirm.");
      navigate("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-6">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md text-white border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <p className="text-center text-green-100 mb-8">
          Join us and access your student dashboard
        </p>

        <form onSubmit={handleSignup} className="space-y-5">
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
            <UserPlus size={18} />
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-green-100">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
