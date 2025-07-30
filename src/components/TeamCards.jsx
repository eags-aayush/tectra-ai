const team = [
  {
    name: "Vijay Ramdev",
    role: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/vijay----jangid",
  },
  {
    name: "Bhawana Kanwar",
    role: "AI Researcher",
    linkedin: "https://www.linkedin.com/in/bhawana-kanwar-bb5889337",
  },
  {
    name: "Dinesh Patel",
    role: "Product Designer",
    linkedin: "https://www.linkedin.com/in/dinesh-patel-35766b2aa",
  },
  {
    name: "Dinesh Patel",
    role: "Product Designer",
    linkedin: "https://www.linkedin.com/in/dinesh-patel-35766b2aa",
  },
];

export default function TeamCards() {
  return (
    <section className=" w-full max-w-6xl py-12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {team.map((member, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 text-white border border-white/10 backdrop-blur-md shadow-lg hover:shadow-cyan-500/30 transition duration-300 text-center"
        >
          <h2 className="text-xl font-semibold text-fuchsia-400">{member.name}</h2>
          <p className="text-white/70 mb-4">{member.role}</p>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black hover:scale-105 transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      ))}
    </section>
  );
}
