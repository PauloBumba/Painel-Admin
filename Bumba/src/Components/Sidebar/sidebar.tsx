import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { SpeedDial } from "primereact/speeddial";
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { useRef } from "react";
import { PanelMenu } from 'primereact/panelmenu';

export default function Sidebar({ isCollapsed, setCollapsed, setHovered }) {
  const isExpanded = !isCollapsed;
  const navigate = useNavigate();
const menuItems = [
    {
     
    
        
        label: isExpanded ? "Dashboard" : " ",
        icon: "pi pi-home",
        tooltip: "Dashboard",
        command: () => navigate("/"),
      items: [
        {
          label: isExpanded ? 'Listar Usuários' : '',
          icon: 'pi pi-list',
          command: () => navigate('/perfil'),
           className:"my-2"
        },
        {
          label: isExpanded ?'Novo Usuário': '',
          icon: 'pi pi-user-plus',
          command: () => navigate('/usuarios/novo'),
        },
      ],
    },
    {
      label: isExpanded ?'Configurações' : "",
      icon: 'pi pi-cog',
      command: () => navigate('/configuracoes'),
       className:"my-2 "
    },
  ];
  const items = [
    {
        label: 'Perfil',
        icon: 'pi pi-user',
        command: () => {
         
        }
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: () => {
         
         
        }
      }
  
];


  return (
    <aside
      className={classNames(
        "sidebar custom-scrollbar sidebar-transition hidden lg:flex flex-column justify-between",
        {
          "sidebar-expanded": isExpanded,
          "sidebar-collapsed": !isExpanded,
        }
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Parte superior com menus */}
      <div className=" flex flex-column ">
        {isExpanded && <h2 className="text-lg font-bold mt-2 mx-auto">Menu</h2>}

        <div className="p-3 flex flex-column h-full justify-between">
        <PanelMenu model={menuItems} className="w-full p-2" />
      </div>
      </div>

      {/* Parte inferior com SpeedDial */}
      <div className="mb-2">
      <div >
                
                <SpeedDial model={items} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 5 }} />
               
      </div>
      
      </div>
    </aside>
  );
}
