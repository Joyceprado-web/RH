import React from "react";

// Placeholder for a button to toggle sidebar on mobile
interface HeaderProps {
  onToggleSidebar?: () => void; // Optional prop for mobile toggle
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="text-xl font-bold text-gray-800">Curso aPHRi</div>
      {/* Hamburger button - visible only on small screens */}
      <button 
        onClick={onToggleSidebar} 
        className="md:hidden p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Toggle navigation"
      >
        {/* Simple hamburger icon using divs */}
        <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-600"></div>
      </button>
    </header>
  );
}

