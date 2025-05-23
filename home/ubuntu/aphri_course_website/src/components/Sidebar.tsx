import Link from "next/link";
import React from "react";

export default function Sidebar() {
  const modules = [
    { name: "Introdução", path: "/modules/introduction" },
    { name: "Operações de RH", path: "/modules/hr-operations" },
    { name: "Recrutamento e Seleção", path: "/modules/recruitment-selection" },
    { name: "Remuneração e Benefícios", path: "/modules/compensation-benefits" },
    { name: "Desenvolvimento e Retenção", path: "/modules/hr-development-retention" },
    { name: "Relações com Empregados, Saúde e Segurança", path: "/modules/employee-relations-health-safety" },
  ];

  const resources = [
    { name: "Glossário", path: "/resources/glossary" },
    { name: "Flashcards", path: "/resources/flashcards" },
  ];

  return (
    // Basic sidebar, responsive behavior will be handled in layout.tsx
    // On small screens, this might be hidden or part of a drawer menu
    <aside className="w-64 bg-gray-100 p-4 h-screen sticky top-0 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Módulos</h2>
      <nav className="mb-6">
        <ul>
          {modules.map((module) => (
            <li key={module.path} className="mb-2">
              <Link href={module.path} className="text-gray-700 hover:text-blue-600 hover:underline">
                {module.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h2 className="text-xl font-semibold mb-4">Recursos</h2>
      <nav>
        <ul>
          {resources.map((resource) => (
            <li key={resource.path} className="mb-2">
              <Link href={resource.path} className="text-gray-700 hover:text-blue-600 hover:underline">
                {resource.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

