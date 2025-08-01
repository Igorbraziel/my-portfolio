import AppLayout from "./components/layout/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <AppLayout>
        <div className="font-extrabold text-xl underline">Hello Tailwind</div>
      </AppLayout>
    </DarkModeProvider>
  );
}

export default App;
