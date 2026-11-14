
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/10 bg-black py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm uppercase tracking-[0.3em] text-white/30"
        >
          About Me
        </motion.p>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Turning ideas into
              <span className="text-white/35">
                {" "}intelligent AI applications.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl"
          >
            <p className="text-base leading-8 text-white/50 sm:text-lg">
              I'm an AI-focused software developer with a Master of
              Computer Applications (MCA) degree. I enjoy building
              practical applications using Python, Machine Learning,
              Natural Language Processing, and Generative AI.
            </p>

            <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
              My work includes developing AI-powered applications,
              experimenting with Large Language Models, and building
              Retrieval-Augmented Generation (RAG) systems. I focus
              on combining programming fundamentals with problem
              solving to turn AI concepts into usable solutions.
            </p>

            <p className="mt-6 text-base leading-8 text-white/50 sm:text-lg">
              Alongside my technical work, I have experience in
              software development and teaching programming,
              which has strengthened my ability to explain concepts
              and approach problems systematically.
            </p>

            {/* Link */}
            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-3 text-sm text-white/70 transition hover:text-white"
            >
              Explore my work

              <ArrowUpRight
                size={17}
                className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid border-y border-white/10 sm:grid-cols-3">

          {/* Item 1 */}
          <div className="border-b border-white/10 px-6 py-8 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold">
              MCA
            </p>
            <p className="mt-2 text-sm text-white/40">
              Computer Applications
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-white/10 px-6 py-8 sm:border-b-0 sm:border-r">
            <p className="text-3xl font-semibold">
              GenAI
            </p>
            <p className="mt-2 text-sm text-white/40">
              LLM & RAG Applications
            </p>
          </div>

          {/* Item 3 */}
          <div className="px-6 py-8">
            <p className="text-3xl font-semibold">
              Python
            </p>
            <p className="mt-2 text-sm text-white/40">
              AI Application Development
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About
