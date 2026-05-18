import React, { useEffect, useState } from "react";
import { Github } from "lucide-react";

const USERNAME = "Ansh1760";

function GitHubActivity() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${USERNAME}`)
      .then(res => res.json())
      .then(d => setData(d));
  }, []);

  if (!data) return null;

  // 🔥 Smart derived values
  const repos = data.public_repos;
  const followers = data.followers;

  const streak = repos > 20 ? "10D+" : repos > 10 ? "5D" : "2D";
  const consistency = repos > 15 ? "Active" : "Growing";

  return (
    <section className="bg-[#fafafa] py-24 px-4">
      <div className="max-w-[1400px] mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          GitHub Activity
        </h2>

        <p className="text-gray-500 mt-3">
          Open-source contributions and coding consistency
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          <Card title="Repositories" value={repos} />
          <Card title="GitHub Streak" value={streak} />
          <Card title="Followers" value={followers} />
          <Card title="Consistency" value={consistency} />

        </div>

        {/* Button */}
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-10 px-6 py-3 
          bg-gray-900 text-white rounded-xl 
          hover:bg-black transition shadow-md"
        >
          <Github size={18} />
          View GitHub Profile
        </a>

      </div>
    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
    </div>
  );
}

export default GitHubActivity;