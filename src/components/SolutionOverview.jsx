import { FileText, Brain, Search, FolderSearch, MessageSquare, Zap, MonitorSmartphone, Lightbulb } from "lucide-react";

export default function SolutionOverview() {
  return (
    <section className="w-full max-w-5xl px-6 py-16 mx-auto text-left text-white space-y-10">
      <div>
        <h2 className="text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-fuchsia-500 inline-block bg-clip-text text-transparent">
          Solution Overview
        </h2>
        <p className="mt-2 text-lg text-white/80">Tectra Insight: <span className="text-cyan-400 font-semibold">Ask Your Documents Anything</span></p>
      </div>

      {/* Features Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white/90">🚀 A full-stack solution that:</h3>
        <ul className="list-none space-y-3 text-white/70">
          <li className="flex items-start gap-3"><FileText className="text-fuchsia-400" size={20} />Accepts documents (PDF, DOCX, Emails)</li>
          <li className="flex items-start gap-3"><Brain className="text-fuchsia-400" size={20} />Uses <span className="text-cyan-400 font-semibold">Groq API</span> with LLMs to understand context</li>
          <li className="flex items-start gap-3"><Search className="text-fuchsia-400" size={20} />Retrieves the most relevant parts via <span className="text-cyan-400 font-semibold">semantic search</span></li>
          <li className="flex items-start gap-3"><FolderSearch className="text-fuchsia-400" size={20} />Returns precise answers with sources & metadata</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white/90">🎁 What You Get:</h3>
        <ul className="list-none space-y-3 text-white/70">
          <li className="flex items-start gap-3"><MessageSquare className="text-cyan-400" size={20} />Natural language search over documents</li>
          <li className="flex items-start gap-3"><Zap className="text-cyan-400" size={20} />Fast, reliable, and explainable answers</li>
          <li className="flex items-start gap-3"><MonitorSmartphone className="text-cyan-400" size={20} />Easy UI & Scalable API backend</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="flex items-start gap-3 mt-8">
        <Lightbulb className="text-yellow-400" size={24} />
        <p className="text-lg text-white/90">
          <span className="text-yellow-400 font-semibold">Transform</span> how your organization interacts with documents.
        </p>
      </div>
    </section>
  );
}
