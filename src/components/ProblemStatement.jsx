import { Lightbulb, AlertTriangle, FileX, SearchSlash, Ban } from "lucide-react";

export default function ProblemStatement() {
  return (
    <section className="w-full max-w-5xl px-6 py-16 mx-auto text-left text-white space-y-10">
      <div>
        <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-fuchsia-500 to-cyan-400 inline-block bg-clip-text text-transparent">
          Problem Statement
        </h2>
        <p className="mt-2 text-lg text-white/80">Why <span className="text-fuchsia-400 font-semibold">Tectra Insight</span>?</p>
      </div>

      {/* Challenges Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white/90">📌 Organizations face these challenges:</h3>
        <ul className="list-none space-y-2 text-white/70">
          <li className="flex items-start gap-3"><FileX className="text-red-400" size={20} />Time-consuming document reviews (policies, contracts, compliance reports)</li>
          <li className="flex items-start gap-3"><SearchSlash className="text-red-400" size={20} />Inaccurate keyword-based search</li>
          <li className="flex items-start gap-3"><Ban className="text-red-400" size={20} />Lack of tools for semantic document understanding</li>
        </ul>
      </div>

      {/* Impact Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white/90">🌍 Real-World Impact:</h3>
        <ul className="list-none space-y-2 text-white/70">
          <li className="flex items-start gap-3"><AlertTriangle className="text-yellow-400" size={20} />Missed clauses in legal contracts</li>
          <li className="flex items-start gap-3"><AlertTriangle className="text-yellow-400" size={20} />Inefficient compliance audits</li>
          <li className="flex items-start gap-3"><AlertTriangle className="text-yellow-400" size={20} />Manual effort in finding critical information</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="flex items-start gap-3 mt-8">
        <Lightbulb className="text-cyan-400" size={24} />
        <p className="text-lg text-white/90">
          Organizations need a <span className="text-cyan-400 font-semibold">smarter way</span> to interact with their documents.
        </p>
      </div>
    </section>
  );
}
