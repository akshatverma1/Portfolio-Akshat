import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import "./App.css"
import ProjectsSection from "./components/ProjectsSection"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/work" element={<ProjectsSection></ProjectsSection>}></Route>
    </Routes>
  )
}

export default App
