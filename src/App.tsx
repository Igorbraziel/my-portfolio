import AppLayout from "./components/layout/AppLayout";

import { DarkModeProvider } from "./context/DarkModeContext";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Suspense, lazy } from "react";

import CustomToaster from "./components/ui/CustomToaster";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const LoadingPage = lazy(() => import("./pages/LoadingPage"));

function App() {
  return (
    <DarkModeProvider>
      <CustomToaster />
      <BrowserRouter>
        <Suspense fallback={<LoadingPage />}>
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
        </Suspense>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
