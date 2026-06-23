import { Mail, MapPin, Phone } from 'lucide-react';
import {
  certificates,
  digitalProjects,
  education,
  experiences,
  profile,
  researchProjects,
  skills,
} from './data/portfolio';
import ExperienceItem from './components/ExperienceItem';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Reveal from './components/Reveal';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';

function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="scroll-mt-24 py-20">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow="About"
                title="Research-minded analysis for real decisions."
                description="I work at the intersection of applied research, data analysis, and digital tools."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="max-w-4xl rounded-lg border border-line bg-white p-6 shadow-card sm:p-8">
                <p className="text-base leading-8 text-slate-600">
                  I am a Data Analysis and Public Policy student at the University of
                  Economics and Business, Vietnam National University, Hanoi. I have
                  experience in literature review, data collection, survey-based
                  research, data cleaning, statistical analysis, dashboard development,
                  and academic report writing.
                </p>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  I am open to opportunities in research, data analysis, business
                  intelligence, policy-related roles, and project-based work.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="education" className="scroll-mt-24 bg-mist py-20">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Education"
                title="Academic Background"
                description="Focused on data analysis, public policy, and applied economic questions."
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-lg border border-line bg-white p-6 shadow-card sm:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy">
                      {education.school}
                    </h3>
                    <p className="mt-2 text-base font-medium text-slate-700">
                      {education.degree}
                    </p>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-teal/20 bg-teal/10 px-4 py-2 text-sm font-semibold text-teal">
                    {education.period}
                  </span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {education.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-md border border-line bg-mist px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="research-projects" className="scroll-mt-24 py-20">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Research Projects"
                title="Applied research across policy, migration, and sustainability."
                description="Projects combine literature review, structured data work, survey-based research, and empirical preparation."
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {researchProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="data-digital-projects" className="scroll-mt-24 bg-mist py-20">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Data & Digital Projects"
                title="Dashboards, web apps, and decision-support workflows."
                description="Digital projects translate data and decision models into practical tools for learning, analysis, and automation."
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-3">
              {digitalProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-20">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Skills"
                title="Research, analysis, and digital toolset."
                description="A compact toolkit for academic research, data cleaning, statistical analysis, dashboards, and workflow prototypes."
              />
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <Reveal key={skill.title} delay={index * 70}>
                  <SkillCard skill={skill} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 bg-mist py-20">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow="Experience & Leadership"
                title="Student leadership and collaboration."
                description="Experience supporting student activities, external relations, events, and internal coordination."
              />
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
              <div className="grid gap-5">
                {experiences.map((item, index) => (
                  <Reveal key={item.title} delay={index * 80}>
                    <ExperienceItem item={item} />
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <aside className="rounded-lg border border-line bg-white p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-navy">Certificates</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {certificates.map((certificate) => (
                      <span
                        key={certificate}
                        className="rounded-full border border-teal/20 bg-teal/10 px-3 py-1.5 text-sm font-semibold text-teal"
                      >
                        {certificate}
                      </span>
                    ))}
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20">
          <div className="section-shell">
            <Reveal>
              <div className="rounded-lg border border-line bg-navy p-7 text-white shadow-soft sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                      Contact
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                      Open to research, data, BI, and policy-related opportunities.
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">
                      I am open to research assistant opportunities, data analysis
                      projects, business intelligence work, policy-related roles, and
                      academic collaborations. Please feel free to contact me via email
                      for further information.
                    </p>
                  </div>

                  <div className="grid gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-mist"
                    >
                      <Mail size={18} />
                      {profile.email}
                    </a>
                    <a
                      href={`tel:${profile.phone}`}
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      <Phone size={18} />
                      {profile.phone}
                    </a>
                    <div className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white">
                      <MapPin size={18} />
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
