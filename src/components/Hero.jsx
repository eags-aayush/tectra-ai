import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center text-center space-y-6 px-6">
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500 drop-shadow-md"
      >
        Tectra Insight
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-white/70 max-w-2xl mx-auto"
      >
        A <span className="text-cyan-400 font-semibold">Groq-Powered</span> Policy & Document Query System
      </motion.p>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-sm text-white/40"
      >
        📅 July 30, 2025 — By <span className="text-fuchsia-400 font-semibold">Tectra AI Team</span>
      </motion.p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer mt-6 px-6 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black shadow-lg hover:shadow-fuchsia-500/50 transition duration-300"
      >
        🚀 Try It Now
      </motion.button>
    </section>
  );
}
