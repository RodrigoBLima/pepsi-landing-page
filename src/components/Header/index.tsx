import React from "react";

import { HeaderContainer, Image, HeaderUL } from "./styles";
import logoImage from "../../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <a href="#" rel="noopener noreferrer">
        <Image>
          {" "}
          <img src={logoImage} alt="" />
        </Image>
      </a>
      <HeaderUL>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Products</a>
        </li>
        <li>
          <a href="">What's New</a>
        </li>
        <li>
          <a href="">Newsletter</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </HeaderUL>
    </HeaderContainer>
  );
};

export default Header;
