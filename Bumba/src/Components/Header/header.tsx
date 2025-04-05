import React, { useState } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import "./header.css";
import { Sidebar } from "primereact/sidebar";

export default function Header({ onToggleSidebar }) {
  const menuRef = React.useRef(null);
  const [visible, setVisible] = useState(false);

  const items = [
    { label: "Calendário", icon: "pi pi-calendar" },
    { label: "Perfil", icon: "pi pi-user" },
    { label: "Configurações", icon: "pi pi-cog" },
  ];

  return (
    <header className="w-full flex justify-content-between  align-items-center px-4 py-2 border-b surface-border surface-0 h-4rem shadow-5 mb-3">
      {/* Esquerda: Logo + Menu */}
      <div className="flex align-items-center gap-8">
        <span className="font-bold text-lg img">
          <i className="pi pi-eye text-xl" /> SAKAI
        </span>

        {/* Um único botão para controlar a sidebar em todas as telas */}
        <Button
          icon="pi pi-bars"
          className="p-button-text p-2 hidden lg:block xl:block"
          onClick={onToggleSidebar}
        />
      
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
    <h2>Menu</h2>
    <ul>
        <li>
            <a href="/">Dashboard</a>
        </li>
        <li>
            <a href="/usuarios">Usuários</a>
        </li>
    </ul>
</Sidebar>

<Button 
  icon="pi pi-bars" 
  onClick={() => setVisible(true)} 
  className="p-button-text p-2 lg:hidden xl:hidden" 
/>

        
     </div>

      {/* Direita */}
      <div className="flex items-center gap-4">
        {/* Versão Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button icon="pi pi-calendar" className="p-button-text p-0" />
          <Button icon="pi pi-user" className="p-button-text p-0" />
          <Button icon="pi pi-cog" className="p-button-text p-0" />
        </div>

        {/* Versão Mobile: botão 3 pontos */}
        <div className="block md:hidden">
          <Button
            icon="pi pi-ellipsis-v"
            className="p-button-text p-0"
            onClick={(e) => menuRef.current.toggle(e)}
            aria-haspopup
            aria-controls="popup_menu"
          />
          <Menu model={items} popup ref={menuRef} id="popup_menu" />
        </div>
      </div>
    </header>
  );
}
