// src/components/common/Breadcrumbs.tsx
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="breadcrumbs bg-base-100 px-4 py-2 text-sm text-base-content">
      <ul className="flex gap-2">
        <li>
          <Link className="hover:underline" to="/">
            Home
          </Link>
        </li>
        {pathnames.map((segment, index) => {
          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li key={segment}>
              <span className="text-base-content/70">{label}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
