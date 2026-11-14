
import { motion } from "framer-motion"
import { ArrowUpRight, GitBranch } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "Auto Code Reviewer",
    category: "AI Application",
    description:
      "An AI-powered code review application that analyzes source code, identifies potential issues, explains errors, and suggests code improvements.",
    technologies: ["Python", "LLM", "Hugging Face", "NLP", "FastAPI"],
    github:
      "https://github.com/mansidhenge10/AI-PROJECTS/tree/main/CODE_AUTO_REVIEWER",
  },
  {
    number: "02",
    title: "AI Interview Mistake Analyzer",
    category: "NLP & Generative AI",
    description:
      "An interview preparation application that analyzes text and voice answers, evaluates answer quality, identifies missing concepts, and provides AI-powered feedback.",
    technologies: ["Python", "NLP", "TF-IDF", "Whisper", "Llama 3.2"],
    github:
      "https://github.com/mansidhenge10/AI-PROJECTS/tree/main/AI%20INTERVIEW%20MISTAKE%20ANALYZER",
  },
  {
    number: "03",
    title: "AI Resume Analyzer",
    category: "Machine Learning & NLP",
    description:
      "An AI-based resume analysis system that extracts skills, compares resumes with job descriptions, calculates ATS-style scores, and provides improvement suggestions.",
    technologies: ["Python", "Streamlit", "NLP", "TF-IDF", "Scikit-learn"],
    github:
      "https://github.com/mansidhenge10/AI-PROJECTS/tree/main/AI%20RESUME%20ANALYZER",
  },
  {
    number: "04",
    title: "Permission-Aware Multi-Tenant RAG",
    category: "Advanced RAG System",
    description:
      "A secure RAG application that retrieves information from documents while enforcing tenant-level data isolation and role-based access permissions.",
    technologies: ["Python", "LangChain", "ChromaDB", "FastAPI", "Ollama"],
    github:
      "https://github.com/mansidhenge10/AI-PROJECTS/tree/main/Permission-Aware%20Multi-Tenant%20RAG",
  },
  {
    number: "05",
    title: "Semantic Caching & Cost-Aware Routing",
    category: "LLM Optimization",
    description:
      "An LLM optimization system that uses semantic caching and cost-aware model routing to reduce repeated model calls and improve response efficiency.",
    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "SQLite",
      "Sentence Transformers",
    ],
    github:
      "https://github.com/mansidhenge10/AI-PROJECTS/tree/main/SEMANTIC-CACHING-COST-AWARE-ROUTING",
  },
  {
    number: "06",
    title: "Engineering Intelligence Hub",
    category: "AI Knowledge Assistant",
    description:
      "An AI-powered engineering knowledge assistant that uses RAG, semantic search, and LLMs to retrieve information from technical documents and generate context-aware answers.",
    technologies: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
      "Ollama",
    ],
    github:
      "https://github.com/mansidhenge10/AI-PROJECTS/tree/main/ENGINEERING-INTELLIGENCE-HUB",
    
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.06]"
    >
      <div className="mb-7 flex items-center justify-between">
        <span className="text-3xl font-bold text-white/20">
          {project.number}
        </span>

        {project.status ? (
          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
            {project.status}
          </span>
        ) : (
          <span className="text-sm text-purple-400">
            {project.category}
          </span>
        )}
      </div>

      <h3 className="mb-4 text-xl font-semibold text-white transition-colors group-hover:text-purple-300">
        {project.title}
      </h3>

      <p className="mb-7 flex-grow text-sm leading-7 text-gray-400">
        {project.description}
      </p>

      <div className="mb-7 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-medium text-purple-300 transition-colors hover:text-white"
      >
        <GitBranch size={17} />
        View on GitHub
        <ArrowUpRight
          size={17}
          className="ml-auto transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </a>
    </motion.div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Featured
            <span className="text-purple-400"> Projects.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-gray-400">
            A collection of AI, Machine Learning, NLP, Generative AI,
            and LLM-based applications built to solve practical problems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://github.com/mansidhenge10/AI-PROJECTS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition-all hover:border-purple-400 hover:bg-purple-500/10"
          >
            Explore All Projects
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
