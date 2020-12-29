import { SidebarMain } from "./Sidebar.elements";

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <SidebarMain isOpen={isOpen}>Sidebar</SidebarMain>
    </>
  );
};

export default Sidebar;
