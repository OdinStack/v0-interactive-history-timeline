export default function Credits(props: {
  group: string
  members: { name: string; id?: string }[]
}) {
  const { group, members } = props
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <p className="mb-2 text-sm uppercase tracking-wide text-muted-foreground">Fabriqué par</p>
      <h3 className="mb-4 text-xl font-semibold">{group}</h3>
      <ul className="grid gap-2 sm:grid-cols-2">
        {members.map((m) => (
          <li
            key={`${m.name}-${m.id ?? ""}`}
            className="flex items-center justify-between rounded-md border bg-background px-3 py-2"
          >
            <span className="text-sm">{m.name}</span>
            {m.id ? <span className="text-xs text-muted-foreground">ID: {m.id}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
