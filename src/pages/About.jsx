import React from "react";
import profileImg from "../assets/anshImg.jpeg";

/* ---------- Role Card ---------- */
const RoleCard = ({ icon, title }) => (
  <div
    className="flex items-center gap-4 px-5 py-4 rounded-xl
    bg-white border border-gray-200
    shadow-sm hover:shadow-md
    hover:border-violet-400/60 transition-all duration-300"
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-gray-800 font-medium">{title}</span>
  </div>
);

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-slate-50 via-violet-50/30 to-indigo-50/50 py-20 px-4 sm:px-6 lg:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ===== LEFT : TEXT ===== */}
        <div className="space-y-6 text-center lg:text-left">

          <span className="text-sm tracking-widest text-gray-500 uppercase">
            Introduction
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Overview<span className="text-violet-600">.</span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
            Full Stack Developer building production-ready web applications 
using React, Node.js, and modern backend architectures.

Focused on writing clean, maintainable code and solving 
real-world engineering problems through strong DSA foundations.

          </p>

          <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
            Quick learner. Strong logical thinking. Actively practicing DSA.
          </p>

          {/* ===== ROLE CARDS ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto lg:mx-0">
            <RoleCard icon="💻" title="⚛️ Frontend Engineering (React, Next.js)" />
            <RoleCard icon="⚛️" title="⚙️ Backend Systems (Node.js, APIs, Databases)" />
            <RoleCard icon="⚙️" title="🧠 Problem Solving (DSA, LeetCode)" />
            <RoleCard icon="⚡" title="🚀 Deployment & Optimization" />
          </div>
        </div>

        {/* ===== RIGHT : IMAGE ===== */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">

            {/* soft glow */}
            <div className="absolute -inset-3 rounded-2xl
              bg-gradient-to-r from-violet-200 to-indigo-200
              opacity-60 blur-xl" />

            {/* image card */}
            <div
              className="relative w-64 h-80 sm:w-72 sm:h-[22rem] lg:w-80 lg:h-[26rem]
              rounded-2xl overflow-hidden border border-gray-200
              bg-white shadow-xl"
            >
              <img
                src={profileImg}
                alt="Ashwini Tripathi"
                className="w-full h-full object-cover
                group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
