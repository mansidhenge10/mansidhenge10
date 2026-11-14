
import { motion } from "framer-motion"
import {
  Mail,
  GitBranch,
  Globe,
  FileText,
  ArrowUpRight
} from "lucide-react"

const contactLinks = [
  {
    title: "Email",
    description: "Let's discuss opportunities and collaborations.",
    value: "mansidhenge10@gmail.com",
    href: "mailto:mansidhenge10@gmail.com",
    icon: Mail
  },
  {
    title: "GitHub",
    description: "Explore my AI and machine learning projects.",
    value: "github.com/mansidhenge10",
    href: "https://github.com/mansidhenge10",
    icon: GitBranch
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally.",
    value: "linkedin.com/in/mansi-dhenge-69743a260",
    href: "https://www.linkedin.com/in/mansi-dhenge-69743a260/",
    icon: Globe
  },
  {
    title: "Resume",
    description: "View my professional experience and skills.",
    value: "Download Resume",
    href: "/MansiDhengeResume.pdf",
    icon: FileText
  }
]

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent Together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            I'm interested in AI Engineer, Generative AI, and Machine Learning
            opportunities. Feel free to connect with me.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid gap-5 sm:grid-cols-2">

          {contactLinks.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Resume" || item.title === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.06]"
              >
                <div className="mb-6 flex items-center justify-between">

                  <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 text-purple-400">
                    <Icon size={24} />
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-500 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
                  />

                </div>

                <h3 className="mb-2 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mb-4 text-sm text-gray-400">
                  {item.description}
                </p>

                <span className="break-all text-sm text-purple-300">
                  {item.value}
                </span>

              </motion.a>
            )
          })}

        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mansi Dhenge. All rights reserved.
          </p>

          <p className="mt-2 text-sm text-gray-600">
            Built with React, Tailwind CSS and Framer Motion.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact
