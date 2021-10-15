import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Link } from "react-router-dom";
import { MenuArea, MenuLogo, MenuIcon, MenuContent } from "./style";
export default ({ ativo }) => {
  const [menuScroll, setMenuScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  const { user, signOut } = useContext(AuthContext);
  function scrollDown() {
    if (window.scrollY === 0) {
      setMenuScroll(false);
    } else if (window.scrollY > 1) {
      setMenuScroll(true);
    }
  }

  window.addEventListener("scroll", scrollDown);

  function handleMenu() {
    setMenu(!menu);
  }

  return (
    <>
      <MenuArea
        style={{
          backgroundColor: menuScroll ? "white" : "transparent",
          borderBottom: menuScroll ? "1px solid #ddd" : "none",
        }}
      >
        <MenuLogo>
          <Link
            style={{ color: window.scrollY === 0 && ativo ? "white" : "black" }}
            to="/"
          >
            House
          </Link>
        </MenuLogo>
        <MenuIcon>
          <img
            alt=""
            style={{
              filter:
                window.scrollY === 0 && ativo ? "invert(100)" : "invert(0)",
            }}
            onClick={handleMenu}
            src="https://img.icons8.com/ios-filled/50/000000/menu--v2.png"
          />
        </MenuIcon>
      </MenuArea>
      <MenuContent>
        <div
          className="overlay"
          style={{
            width: menu ? "100%" : "0%",
          }}
        >
          <div className="overlay-content">
            <img
              alt=""
              onClick={handleMenu}
              src="https://img.icons8.com/ios-filled/30/000000/multiply.png"
            />
            <Link to="/">Home</Link>
            <Link to="/houses">Casas</Link>
            <Link to="/contact">Contato</Link>
            {user && (
              <>
                <Link to="/admin">Admin</Link>
                <Link to="/" onClick={() => signOut()}>
                  Sair
                </Link>
              </>
            )}
          </div>
        </div>
      </MenuContent>
    </>
  );
};
