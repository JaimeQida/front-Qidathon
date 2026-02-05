import { NavLink } from "react-router-dom"

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/settings", label: "Settings" },
] as const

export function Sidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-gray-200 bg-gray-50 p-4 md:w-64">
      <nav aria-label="Principal" className="flex flex-col gap-1">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
