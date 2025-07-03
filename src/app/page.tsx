"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Brain,
  Database,
  TrendingUp,
  MessageCircle,
  BookOpen,
  Send,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import areeba from "@/../public/areebaprofile-removebg-preview-removebg-preview.png";
// Typing animation hook
function useTypingAnimation(text: string, speed = 100) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/areebalogodesign-removebg-preview.png";


export default function Home() {const [darkMode, setDarkMode] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Typing animation
  const typedText = useTypingAnimation("Web Developer & AI Specialist", 80)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const projects = [
    {
      title: "Crypto Market Bot",
      description:
        "AI-powered trading bot that analyzes market trends and executes automated trades with real-time data processing and risk management.",
      image: "/placeholder.svg?height=250&width=400",
      tech: ["Python", "TensorFlow", "WebSocket", "FastAPI"],
      link: "https://github.com/mehreebshah?tab=repositories",
      github: "https://github.com/mehreebshah?tab=repositories",
      icon: TrendingUp,
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "AI Customer Support Agent",
      description:
        "Intelligent chatbot with natural language processing that handles customer inquiries, provides instant support, and escalates complex issues.",
      image: "/placeholder.svg?height=250&width=400",
      tech: ["LangChain", "OpenAI", "Next.js", "PostgreSQL"],
      link: "https://github.com/mehreebshah?tab=repositories",
      github: "https://github.com/mehreebshah?tab=repositories",
      icon: MessageCircle,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Quran Learning Chatbot",
      description:
        "Educational AI assistant that helps users learn Quranic verses, provides translations, and offers personalized learning paths.",
      image: "/placeholder.svg?height=250&width=400",
      tech: ["Python", "NLP", "React", "MongoDB"],
      link: "https://github.com/mehreebshah?tab=repositories",
      github: "https://github.com/mehreebshah?tab=repositories",
      icon: BookOpen,
      gradient: "from-amber-400 to-orange-500",
    },
  ]

  const skills = [
    { name: "Next.js", level: 95, icon: Code },
    { name: "React", level: 92, icon: Code },
    { name: "Python", level: 90, icon: Code },
    { name: "LangChain", level: 88, icon: Brain },
    { name: "Tailwind CSS", level: 94, icon: Code },
    { name: "AI/ML", level: 85, icon: Brain },
    { name: "FastAPI", level: 87, icon: Code },
  ]

  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src={logo} alt="logo" width={150} height={100} className="ml-20" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { href: "/", label: "Home", highlight: true },
                { href: "#about", label: "About Me" },
                { href: "#projects", label: "See My Work" },
                { href: "#contact", label: "Contact Me" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative group font-medium transition-colors duration-300 ${
                    item.highlight ? "text-gray-900" : "text-cyan-700"
                  } hover:text-cyan-900`}
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-cyan-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
            <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 bg-gradient-to-b from-white to-gray-100">
      {/* Left Content */}
      <motion.div
        className="max-w-xl text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
          Hi, I'm <span className="text-blue-600">Areeba</span> <br />
          A Web Developer & AI Agent Crafter
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          I build modern websites, intuitive UIs, and intelligent AI agents
          using Next.js, Tailwind CSS, and OpenAI.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link href="#projects">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-md transition duration-300">
              View Projects
            </button>
          </Link>
          <Link href="#contact">
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-2xl transition duration-300">
              Let’s Connect
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="mt-12 lg:mt-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={areeba} // Replace with your illustration
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
 <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about creating digital experiences that combine beautiful design with intelligent
            functionality.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Web Development Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl w-fit mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Web Development
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Building fast, responsive websites with modern frameworks like Next.js and React, styled with
                Tailwind CSS for pixel-perfect designs and optimal user experiences.
              </p>
            </motion.div>

            {/* AI Solutions Card */}
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl w-fit mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                AI Solutions
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Creating intelligent agents for customer support, data analysis, and automation using Python,
                LangChain, and cutting-edge AI technologies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A showcase of my AI agents and web development projects that solve real-world problems
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden">
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                      <div className="relative p-8 text-white">
                        <project.icon className="h-12 w-12 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            className="border-gray-300 dark:border-gray-600 rounded-full hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-200 bg-transparent"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10"
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your next project and create something amazing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Get In Touch</h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">hello@shahsyedaareeba8.com</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">github.com/mehreebshah</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">www.linkedin.com/in/syeda-areeba-shah/</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form
  action="https://formspree.io/f/mwpbzwad" 
  method="POST"
  className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
>
  <div>
    <Input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
    />
  </div>

  <div>
    <Input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200"
    />
  </div>

  <div>
    <Textarea
      name="message"
      rows={5}
      placeholder="Your Message"
      required
      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 resize-none"
    />
  </div>
    

  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
    <Button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Send Message
      <Send className="ml-2 h-5 w-5" />
    </Button>
  </motion.div>
        </form>
      </motion.div>
    </div>
  </div>
</motion.section>
{/* Footer */}
<footer className="py-12 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-gray-600 dark:text-gray-300"
    >
      © 2025 Syeda Areeba Shah
    </motion.p>
  </div>
</footer>

    </div>
  );
}
