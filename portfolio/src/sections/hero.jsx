
import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label */}
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
             AI Engineer | Generative AI
            </p>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
              Building
              <br />
              <span className="text-white/35">
                intelligent
              </span>
              <br />
              AI systems.
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
              I develop practical AI applications using Python,
              Machine Learning, NLP, Large Language Models,
              and Generative AI to solve real-world problems.
            </p>

            {/* Technology Tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {["Python", "Machine Learning", "NLP", "RAG", "LLMs"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50"
                  >
                    {item}
                  </span>
                )
              )}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                View Projects

                <ArrowUpRight
                  size={17}
                  className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT AI ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden h-[500px] lg:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">

              {/* OUTER ORBIT */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[390px] w-[390px] rounded-full border border-white/[0.07]"
              />

              {/* MIDDLE ORBIT */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[285px] w-[285px] rounded-full border border-white/[0.08]"
              />

              {/* INNER ORBIT */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[165px] w-[165px] rounded-full border border-white/[0.12]"
              />

              {/* AI CORE */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-xl"
              >
                <span className="text-xs tracking-[0.3em] text-white/70">
                  AI
                </span>
              </motion.div>

              {/* NLP */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-10 top-20 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50 backdrop-blur-xl"
              >
                NLP
              </motion.div>

              {/* ML */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-8 top-36 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50 backdrop-blur-xl"
              >
                ML
              </motion.div>

              {/* LLM */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-24 left-20 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50 backdrop-blur-xl"
              >
                LLM
              </motion.div>

              {/* RAG */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-14 right-20 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/50 backdrop-blur-xl"
              >
                RAG
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30"
      >
        <ArrowDown size={14} />
        Scroll to explore
      </motion.div>
    </section>
  )
}

export default Hero
