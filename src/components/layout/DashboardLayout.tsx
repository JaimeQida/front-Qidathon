import { Outlet } from "react-router-dom"
import { Header } from "./Header"

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col">
        <Header initials="JD" name="John Doe" age="45 años" />
        <main className="flex flex-col flex-1 min-h-0 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
