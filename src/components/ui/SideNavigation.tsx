import { Link } from "react-router";
import { links } from "../../data/links";

interface SideNavigationProps {
  onClose?: () => void; 
}

export default function SideNavigation({ onClose }: SideNavigationProps ) {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <Link to={link.path} key={index} onClick={onClose}>
            <li className="uppercase" key={link.label}>
              {link.emoji} {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
