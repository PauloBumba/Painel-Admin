import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Header/header";
import Sidebar from "../Components/Sidebar/sidebar";
import { Footer } from "../Components/Footer/footer";
import "./main.css";

export const Main = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true); // clique
  const [isSidebarHovered, setSidebarHovered] = useState(false);   // hover

  const isSidebarExpanded = !isSidebarCollapsed || isSidebarHovered;

  return (
    <div className="flex flex-column min-h-screen">
      <Header onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />

      <div className="flex flex-1">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
          setHovered={setSidebarHovered}
        />

        {/* Conteúdo e footer juntos */}
        <div
          className={`flex flex-column flex-1 content-transition  ${
            isSidebarExpanded ? "content-expanded" : "content-collapsed"
          }`}
        >
          <main className="flex-1 p-4 main-painel">
            <Outlet />
          </main>

          <div className="footer-painel">
              <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
