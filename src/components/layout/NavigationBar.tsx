import { useDarkMode } from "../../hooks/useDarkMode";

export default function NavigationBar() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <nav className="w-full">
      <ul className="flex">
        <li>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </li>
      </ul>
    </nav>
  );
}
