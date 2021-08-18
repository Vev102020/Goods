import React from "react";
import NavLinks from "./NavLinks";
import "./NavLinks.css";
import cn from 'classnames'

export default function Nav() {
 
  let [mLink, setmLink] = React.useState(false);
  function VisibleMenu() {
    setmLink(!mLink)
  }

  return (
    <div id="menu">
      <div
        className={cn('menu_link', {'active':mLink})}
        onClick={VisibleMenu}
      >
        <span>Меню</span>
        <span className="arrow"></span>
      </div>
      <NavLinks mLink={mLink} />
    </div>
  );
}
