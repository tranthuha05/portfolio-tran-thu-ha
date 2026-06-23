export default function ExperienceItem({ item }) {
  return (
    <article className="relative rounded-lg border border-line bg-white p-6 shadow-card">
      <div className="absolute left-0 top-6 h-10 w-1 rounded-r bg-teal" />
      <div className="pl-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
            <p className="mt-1 text-sm font-medium text-slate-600">{item.organization}</p>
          </div>
          <span className="inline-flex w-fit rounded-full border border-ocean/15 bg-ocean/10 px-3 py-1 text-xs font-semibold text-navy">
            {item.period}
          </span>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
      </div>
    </article>
  );
}
