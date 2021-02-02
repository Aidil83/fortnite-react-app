import {SidebarItem, SidebarMain, SidebarMenu} from "./Sidebar.elements";

const Sidebar = ({isOpen, handleToggle}) => {
  return (
    <>
      <SidebarMain isOpen={isOpen}>
        <SidebarMenu>
          <SidebarItem to="/battle_Pass" onClick={handleToggle}>BATTLE PASS</SidebarItem>
          <SidebarItem to="/creative" onClick={handleToggle}>CREATIVE</SidebarItem>
          <SidebarItem to="/save_the_world" onClick={handleToggle}>SAVE THE WORLD</SidebarItem>
          <SidebarItem to="/competitive" onClick={handleToggle}>COMPETIVE</SidebarItem>
          <SidebarItem to="/news" onClick={handleToggle}>NEWS</SidebarItem>
          <SidebarItem to="/merch" onClick={handleToggle}>MERCH</SidebarItem>
        </SidebarMenu>
      </SidebarMain>
    </>
  );
};

export default Sidebar;
