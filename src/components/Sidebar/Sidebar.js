import { SidebarItem, SidebarMain, SidebarMenu } from "./Sidebar.elements";

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <SidebarMain isOpen={isOpen}>
        <SidebarMenu>
          <SidebarItem to="/battle_Pass">BATTLE PASS</SidebarItem>
          <SidebarItem to="/creative">CREATIVE</SidebarItem>
          <SidebarItem to="/save_the_world">SAVE THE WORLD</SidebarItem>
          <SidebarItem to="/competitive">COMPETIVE</SidebarItem>
          <SidebarItem to="/news">NEWS</SidebarItem>
          <SidebarItem to="/merch">MERCH</SidebarItem>
        </SidebarMenu>
      </SidebarMain>
    </>
  );
};

export default Sidebar;
