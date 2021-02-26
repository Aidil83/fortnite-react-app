import {
  SidebarFooter,
  SidebarItem,
  SidebarMain,
  SidebarMenu,
} from "./Sidebar.elements";
import { GiShoppingCart } from "react-icons/gi";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const Sidebar = ({ isOpen, handleToggle }) => {
  const [{ trackLogin, purchasedItems }] = useContext(StateContext);

  return (
    <>
      <SidebarMain isOpen={isOpen}>
        <SidebarMenu>
          {/* <SidebarItem to="/battle_Pass" onClick={handleToggle}>
            BATTLE PASS
          </SidebarItem> */}
          <SidebarItem to="/creative" onClick={handleToggle}>
            CREATIVE
          </SidebarItem>
          {/* <SidebarItem to="/save_the_world" onClick={handleToggle}>
            SAVE THE WORLD
          </SidebarItem> */}
          {/* <SidebarItem to="/competitive" onClick={handleToggle}>
            COMPETIVE
          </SidebarItem> */}
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
                <Link
                  to="/sign_in"
                  className="icon-signIn"
                  onClick={handleToggle}
                >
                  <h3>{trackLogin}</h3>
                  <FaUserPlus className="icon" />
                </Link>
                <Link to="/cart" className="icon-cart" onClick={handleToggle}>
                  <GiShoppingCart className="icon" />
                  <span>{purchasedItems?.length}</span>
                  <div className="cart-indication">
                    <div>Item Added!</div>
                  </div>
                </Link>
              </div>
            </div>
          </SidebarFooter>
        </SidebarMenu>
      </SidebarMain>
    </>
  );
};

export default Sidebar;
