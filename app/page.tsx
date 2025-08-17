import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import ParticleBackground from "@/app/components/particles";

export default function Page() {
  return (
    <ParticleBackground>
      <div className="min-h-screen flex flex-col items-center">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">
                  Gabriel Sousa
                </span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                  href="#about"
                  className="transition-colors hover:text-foreground/80"
                >
                  Sobre
                </Link>
                <Link
                  href="#projects"
                  className="transition-colors hover:text-foreground/80"
                >
                  Projetos
                </Link>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-foreground/80"
                >
                  Contato
                </Link>
              </nav>
            </div>
            <Button variant="outline" className="ml-auto">
              Resumo
            </Button>
          </div>
        </header>

        <main className="container px-4 md:px-6">
          <section id="about" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Software Developer - Gabriel Sousa
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Bem vindo ao meu portfolio.
                  </p>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Criando soluções digitais por meio de tecnologias modernas.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="https://github.com/GabrielPSousa" target="_blank">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/gabriel-sousa-3251759a/"
                    target="_blank"
                  >
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:gabriel_pereirasousa@outlook.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Projetos
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Barber App"
                  description="Aplicativo focado para barbearias contruido com Next.js, Nest, e PostgreSQL integration."
                  image="/barber-app.jpg"
                  link="https://github.com"
                  tags={["Next", "Nest", "PostgreSQL"]}
                />
                <ProjectCard
                  title="Task Management App"
                  description="Web App para gerenciamento de tarefas, com funcionalidades de colaboração em tempo real."
                  image="/task-manager-app.jpg"
                  link="https://github.com"
                  tags={["React", "Node.js", "Socket.io"]}
                />
                <ProjectCard
                  title="Real-time Chat App"
                  description="Aplicativo de chat em tempo real, com suporte a múltiplos usuários e salas de conversa."
                  image="/chat-app.jpg"
                  link="https://github.com"
                  tags={["Firebase", "Next.js", "TailwindCSS"]}
                />
              </div>
            </div>
          </section>

          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Tech Stack
              </h2>
              <TechStack />
            </div>
          </section>

          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Entre em Contato
                </h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t">
          <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </ParticleBackground>
  );
}
