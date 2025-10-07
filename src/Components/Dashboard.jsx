import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  BookOpen,
  User,
  Calendar,
  BarChart2,
  Settings,
} from "lucide-react";
import supabase from "./supabase";

export default function Dashboard() {
  let [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email);
      }
    }
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setEmail("");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-6 text-white">
      <div className="flex justify-between items-center mb-8 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">
          🎓 Student Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center bg-white text-green-600 px-4 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all"
        >
          <LogOut className="mr-2" size={18} /> Logout
        </button>
      </div>

      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10">
        <div className="bg-white text-green-600 rounded-full p-4 shadow-md">
          <User size={60} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Muhammad Zaid</h2>
          <p className="text-green-100">{email ? email : "Loading..."}</p>
          <div className="mt-4 flex gap-4 text-sm text-green-200">
            <span>🎯 ID: 2025-ST-045</span>
            <span>📚 Dept: Computer Science</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/20 hover:bg-white/30 transition-all backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 cursor-pointer">
          <BookOpen size={50} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">My Courses</h3>
          <p className="text-green-100">
            View and continue your enrolled courses.
          </p>
        </div>

        <div className="bg-white/20 hover:bg-white/30 transition-all backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 cursor-pointer">
          <Calendar size={50} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">Schedule</h3>
          <p className="text-green-100">
            Check your class timings and exam dates.
          </p>
        </div>

        <div className="bg-white/20 hover:bg-white/30 transition-all backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 cursor-pointer">
          <BarChart2 size={50} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">Performance</h3>
          <p className="text-green-100">
            Track your academic progress and results.
          </p>
        </div>

        <div className="bg-white/20 hover:bg-white/30 transition-all backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 cursor-pointer">
          <Settings size={50} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">Settings</h3>
          <p className="text-green-100">
            Manage your account preferences and theme.
          </p>
        </div>

        <div className="bg-white/20 hover:bg-white/30 transition-all backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 cursor-pointer">
          <Calendar size={50} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">Announcements</h3>
          <p className="text-green-100">Stay updated with university news.</p>
        </div>

        <div className="bg-white/20 hover:bg-white/30 transition-all backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 cursor-pointer">
          <User size={50} className="mb-4 text-white" />
          <h3 className="text-xl font-semibold mb-2">My Profile</h3>
          <p className="text-green-100">Edit and view your personal details.</p>
        </div>
      </div>
    </div>
  );
}
