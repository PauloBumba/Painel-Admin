import React, { useState } from "react";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = React.useRef(null);

  const items = [
    { label: "Calendário", icon: "pi pi-calendar" },
    { label: "Perfil", icon: "pi pi-user" },
    { label: "Configurações", icon: "pi pi-cog" },
  ];

  return (
    <header className="w-full flex  px-4 py-2 border-b surface-border surface-0">
      {/* Esquerda: Logo + Menu */}
      <div className="flex items-center gap-2">
        <i className="pi pi-eye text-xl"></i>
        <span className="font-bold text-lg">SAKAI</span>
        <Button
          icon="pi pi-bars"
          className="p-button-text p-0 ml-2"
          onClick={() => {
            // 👉 Adapte conforme o comportamento desejado
            console.log("Toggle Sidebar ou OffCanvas");
          }}
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
