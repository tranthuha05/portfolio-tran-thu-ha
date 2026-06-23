export default function SkillCard({ skill }) {
  return (
    <article className="h-full rounded-lg border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal/35 hover:shadow-soft">
      <h3 className="text-lg font-semibold text-navy">{skill.title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-mist px-3 py-1.5 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
