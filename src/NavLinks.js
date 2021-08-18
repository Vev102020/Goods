import React from "react";
import cn from "classnames";
const links = require('./Menu.json');

export default function NavLinks(props) {

  return (
    <div className={cn("menu", { active: props.mLink })}>
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.name}
        </a>
      ))}
    </div>
  );
}
