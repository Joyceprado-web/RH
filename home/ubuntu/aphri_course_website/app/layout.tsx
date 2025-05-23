"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "./globals.css"; // Ensure Tailwind base styles are imported

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="pt-BR">
      <body>
        <div className="flex h-screen bg-gray-50">
          {/* Sidebar - Always visible on medium screens and up */}
          <div className="hidden md:block md:flex-shrink-0">
            <Sidebar />
          </div>

          {/* Mobile Sidebar - Conditional rendering based on state */}
          {isSidebarOpen && (
            <div className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}>
              <div className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-100" onClick={(e) => e.stopPropagation()}>
                <Sidebar />
              </div>
            </div>
          )}

          {/* Main content area */}
          <div className="flex flex-col flex-1 w-full overflow-y-auto">
            <Header onToggleSidebar={toggleSidebar} />
            <main className="flex-1 p-4 md:p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

