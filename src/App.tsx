import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DashboardLayout } from "./components/layout/DashboardLayout"
import { DashboardPage } from "./pages/dashboard/DashboardPage"
import { SettingsPage } from "./pages/settings/SettingsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
