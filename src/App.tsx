import AppLayout from "./components/layout/AppLayout";

import { DarkModeProvider } from "./context/DarkModeContext";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import PageNotFound from "./pages/PageNotFound";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/homepage" />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="projects">
              <Route index element={<ProjectsPage />} />
              <Route path=":pid" element={<ProjectPage />} />
            </Route>
            <Route path="skills" element={<SkillsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
