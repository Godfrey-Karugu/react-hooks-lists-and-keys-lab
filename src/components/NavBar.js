import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const linkitems = links.map((link)=>{
        return <a  key={link} href="#{link}">{link}</a>
})


  return <nav> {linkitems}</nav>;
 
}

export default NavBar;
