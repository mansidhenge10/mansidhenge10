
import { motion } from "framer-motion"
import {
  Brain,
  Code2,
  Database,
  Globe,
  Layers3,
  Sparkles,
} from "lucide-react"

const skillGroups = [
  {
    icon: Code2,
    title: "Programming Languages",
    description:
      "Programming fundamentals and application development.",
    skills: [
      "Python",
      "SQL",
      "C",
      "JavaScript",
      "OOP",
      "Data Structures",
    ],
  },
  {
    icon: Sparkles,
    title: "Generative AI & LLMs",
    description:
      "Building LLM-powered applications and working with modern AI techniques.",
    skills: [
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "RAG",
      "LangChain",
      "Ollama",
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & NLP",
    description:
      "Developing machine learning models and text-based AI solutions.",
    skills: [
      "Scikit-learn",
      "NLP",
      "NLTK",
      "TF-IDF",
      "Text Processing",
      "Semantic Similarity",
    ],
  },
  {
    icon: Layers3,
    title: "AI Frameworks & Libraries",
    description:
      "Using Python frameworks and libraries to develop AI applications.",
    skills: [
      "FastAPI",
      "Streamlit",
      "Hugging Face Transformers",
      "Sentence Transformers",
      "Pandas",
    ],
  },
  {
    icon: Database,
    title: "Databases & Vector Stores",
    description:
      "Managing application data and supporting semantic search workflows.",
    skills: [
      "ChromaDB",
      "SQLite",
      "SQL",
      "Vector Search",
      "Embeddings",
    ],
  },
  {
    icon: Globe,
    title: "Development Tools",
    description:
      "Tools for development, API testing, version control, and collaboration.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Jupyter Notebook",
      "REST APIs",
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-white/10 bg-black py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/30">
            Technical Expertise
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Technologies behind
            <span className="text-white/35">
              {" "}the AI solutions I build.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/40">
            My technical toolkit spans programming, machine learning,
            natural language processing, and Generative AI application
            development.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
              >

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/70">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mt-7 text-xl font-medium">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-white/40">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50 transition group-hover:border-white/15 group-hover:text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.article>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Skills
