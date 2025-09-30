import AppLayout from "./components/layout/AppLayout";

import { DarkModeProvider } from "./context/DarkModeContext";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import CustomToaster from "./components/ui/CustomToaster";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import PageNotFound from "./pages/PageNotFound";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";

function App() {
  return (
    <DarkModeProvider>
      <CustomToaster />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/homepage" />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
