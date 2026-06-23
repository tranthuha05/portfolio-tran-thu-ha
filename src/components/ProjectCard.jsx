import { ExternalLink, LockKeyhole } from 'lucide-react';

function Badge({ children, tone = 'default' }) {
  const styles =
    tone === 'tool'
      ? 'border-ocean/15 bg-ocean/10 text-navy'
      : 'border-teal/15 bg-teal/10 text-teal';

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}
    >
      {children}
    </span>
  );
}

function ActionButton({ action }) {
  if (action.href) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:border-teal hover:text-teal"
      >
        {action.label}
        <ExternalLink size={16} />
      </a>
    );
  }

  return (
    <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-line bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-500">
      {action.label}: Available upon request
      <LockKeyhole size={15} />
    </span>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal/35 hover:shadow-soft">
      <div className="flex flex-1 flex-col">
        <div className="mb-5 flex flex-wrap gap-2">
          <Badge>{project.status}</Badge>
          <Badge tone="tool">{project.role}</Badge>
        </div>

        <h3 className="text-xl font-semibold leading-7 text-navy">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>

        <div className="mt-5">
          <h4 className="text-sm font-semibold text-ink">My contribution</h4>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            {project.contributions.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} tone="tool">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Keywords
          </p>
          <div className="flex flex-wrap gap-2">
            {project.keywords.map((keyword) => (
              <Badge key={keyword}>{keyword}</Badge>
            ))}
          </div>
        </div>
      </div>

      {project.actions.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-3 border-t border-line pt-5">
          {project.actions.map((action) => (
            <ActionButton key={action.label} action={action} />
          ))}
        </div>
      )}
    </article>
  );
}
