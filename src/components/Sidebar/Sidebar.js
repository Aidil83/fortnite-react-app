import {
  SidebarFooter,
  SidebarItem,
  SidebarMain,
  SidebarMenu,
} from "./Sidebar.elements";
import { GiShoppingCart } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa";

const Sidebar = ({ isOpen, handleToggle }) => {
  return (
    <>
      <SidebarMain isOpen={isOpen}>
        <SidebarMenu>
          <SidebarItem to="/battle_Pass" onClick={handleToggle}>
            BATTLE PASS
          </SidebarItem>
          <SidebarItem to="/creative" onClick={handleToggle}>
            CREATIVE
          </SidebarItem>
          <SidebarItem to="/save_the_world" onClick={handleToggle}>
            SAVE THE WORLD
          </SidebarItem>
          <SidebarItem to="/competitive" onClick={handleToggle}>
            COMPETIVE
          </SidebarItem>
          <SidebarItem to="/news" onClick={handleToggle}>
            NEWS
          </SidebarItem>
          <SidebarItem to="/merch" onClick={handleToggle}>
            MERCH
          </SidebarItem>
          <SidebarItem to="/cart" onClick={handleToggle}>
            CART
          </SidebarItem>
          <SidebarFooter>
            <div className="Footer__container">
              <div className="Footer__searchBar">
                <input type="text" placeholder="Search..." />
              </div>
              <div className="Footer__icons">
                <div className="icon-signIn">
                  <h3>Sign In</h3>
                  <FaUserPlus className="icon" />
                </div>
                <div className="icon-cart">
                  <GiShoppingCart className="icon" />
                </div>
              </div>
            </div>
          </SidebarFooter>
        </SidebarMenu>
      </SidebarMain>
    </>
  );
};

export default Sidebar;
