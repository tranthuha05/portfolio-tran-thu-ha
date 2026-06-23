import { ArrowRight, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';

const heroBadges = ['Research', 'Data Analysis', 'Digital Tools'];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-mist pt-28 sm:pt-32 lg:min-h-[680px]"
    >
      <div className="absolute inset-0 -z-10 bg-grid bg-[length:32px_32px]" />
      <div className="absolute left-0 top-0 -z-10 h-72 w-72 bg-teal/10 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-80 w-80 bg-ocean/10 blur-3xl" />

      <div className="section-shell relative grid gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(340px,480px)] lg:items-center lg:pb-24">
        <Reveal className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-teal/25 bg-white/78 px-4 py-2 text-sm font-semibold text-teal shadow-sm backdrop-blur">
            {profile.title}
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-navy sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {profile.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {heroBadges.map((item) => (
              <span
                key={item}
                className="rounded-full border border-teal/20 bg-white/78 px-3 py-1.5 text-sm font-semibold text-teal shadow-sm backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#research-projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-ink"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-teal/35 bg-white px-5 py-3 text-sm font-semibold text-teal shadow-sm transition hover:-translate-y-0.5 hover:border-teal hover:bg-teal hover:text-white"
            >
              Contact
              <Mail size={18} />
            </a>
          </div>
        </Reveal>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-teal/12 via-white/70 to-ocean/12 blur-sm" />
          <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 shadow-soft">
            <img
              src={profileImage}
              alt="Tran Thu Ha portrait"
              className="h-[420px] w-full rounded-[1.35rem] object-cover object-[50%_16%] sm:h-[460px] lg:h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}