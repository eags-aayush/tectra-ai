import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaMagic, FaMicrophone, FaRobot } from "react-icons/fa";
import ParticlesBg from "particles-bg";

const IO = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [clauses, setClauses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setOutput("");
    setClauses([]);

    try {
      const response = await fetch("http://localhost:8000/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: prompt }),
      });

      const data = await response.json();
      setOutput(data.answer);
      setClauses(data.clauses || []);
    } catch (err) {
      console.error("Error:", err);
      setOutput("⚠️ Tectra failed to respond. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-25 mt-15">
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
      <Tilt className="w-[90vw] max-w-3xl z-10">
        <motion.div
          className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-xl transition-all"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-center mb-6">
            Tectra ∞
          </h1>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Whisper your thoughts to the Tectra..."
            className="w-full p-4 h-32 text-white bg-black/20 rounded-xl focus:outline-none resize-none placeholder-white/60"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            onClick={handleSubmit}
            disabled={!prompt.trim() || loading || prompt.length < 1}
            className={`${prompt.length < 1 ? "cursor-not-allowed" : "cursor-pointer"}
 mt-6 px-6 py-3 w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-lg font-semibold shadow-lg transition-all disabled:opacity-50`}
          >
            {loading ? "Summoning Tectra..." : (
              <span className="flex items-center justify-center gap-2">
                <FaMagic /> Summon Response
              </span>
            )}
          </motion.button>

          {output && (
            <motion.div
              className="mt-8 text-white/90 text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FaRobot className="inline-block mr-2 text-pink-400 animate-pulse" />
              <strong className="text-pink-300">Tectra:</strong> {output}
            </motion.div>
          )}

          {clauses.length > 0 && (
            <motion.ul
              className="mt-4 text-white/70 text-base space-y-2 list-disc list-inside"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {clauses.map((clause, index) => (
                <li key={index}>{clause}</li>
              ))}
            </motion.ul>
          )}
        </motion.div>
      </Tilt>
    </div>
  );
}

export default IO