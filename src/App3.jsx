import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

export default function Tectra() {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      setOutput(`Here's a stunning, thoughtful response generated just for you.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center overflow-hidden relative text-white font-sans px-4">
      {/* Starry Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0" />

      {/* Input Card */}
      <motion.div
        className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl w-full max-w-2xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-bold text-center text-white drop-shadow-lg mb-6">
          <span className="text-primary">Tectra</span>
        </h1>

        <textarea
          placeholder="Enter your magical prompt..."
          className="w-full h-28 p-4 text-lg text-white bg-white/10 border border-white/20 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          disabled={loading || !prompt.trim()}
          className="mt-6 w-full py-3 px-6 text-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Generating...' : '✨ Generate Output'}
        </motion.button>

        {/* Output Section */}
        {output && (
          <motion.div
            className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6 text-white text-lg whitespace-pre-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FaRobot className="inline mr-2 text-primary" />
            {output}
          </motion.div>
        )}
      </motion.div>

      {/* Floating Orbs (Optional Decoration) */}
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-[-100px] right-[-100px] animate-pulse" />
      <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl bottom-[-80px] left-[-80px] animate-pulse" />
    </div>
  );
}
