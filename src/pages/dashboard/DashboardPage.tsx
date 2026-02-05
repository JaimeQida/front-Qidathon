export function DashboardPage() {
  const metrics = [
    { label: "Total participantes", value: "128" },
    { label: "Proyectos activos", value: "24" },
    { label: "Horas invertidas", value: "340" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <p className="text-sm text-gray-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-base font-medium text-gray-900">Última actividad</h3>
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          <li>Proyecto Alpha — actualizado hace 5 min</li>
          <li>Proyecto Beta — nuevo commit hace 12 min</li>
          <li>Proyecto Gamma — deploy completado hace 1 h</li>
        </ul>
      </section>
    </div>
  )
}
