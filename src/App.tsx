import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import ProblemPage from "./pages/ProblemPage"
import SolutionPage from "./pages/SolutionPage"
import ObjectivesPage from "./pages/ObjectivesPage"
import SDGsPage from "./pages/SDGsPage"
import TeamPage from "./pages/TeamPage"
import ContactPage from "./pages/ContactPage"
import DashboardPage from "./pages/DashboardPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="problem" element={<ProblemPage />} />
        <Route path="solution" element={<SolutionPage />} />
        <Route path="objectives" element={<ObjectivesPage />} />
        <Route path="sdgs" element={<SDGsPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  )
}

export default App
