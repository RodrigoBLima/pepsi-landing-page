import React from "react";

import {
  Container,
  Header,
  Image,
  HeaderUL,
  HeaderLI,
  Content,
  TextBox,
  ImageBox,
  Thumb,
  SectionIcons
} from "./styles";

import logoImage from "../../assets/images/logo.png";
import pepsiImage from "../../assets/images/pepsi001.png";

import iconFB from "../../assets/images/facebook.png";
import iconTw from "../../assets/images/twitter.png";
import iconInst from "../../assets/images/instagram.png";

import pepsiImage2 from "../../assets/images/pepsi002.png";
import pepsiImage3 from "../../assets/images/pepsi003.png";

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <a href="#" rel="noopener noreferrer">
          <Image>
            {" "}
            <img src={logoImage} alt="" />
          </Image>
        </a>
        <HeaderUL>
          {/* <li> */}
          <HeaderLI>
            <a href="">Home</a>
          </HeaderLI>
          <HeaderLI>
            <a href="">Products</a>
          </HeaderLI>
          <HeaderLI>
            <a href="">What's New</a>
          </HeaderLI>
          <HeaderLI>
            <a href="">Newsletter</a>
          </HeaderLI>
          <HeaderLI>
            <a href="">Contact</a>
          </HeaderLI>

          {/* </li> */}
        </HeaderUL>
      </Header>
      <Content>
        <TextBox>
          <h2>
            That's What'
            <br />
            <span>I Like</span>
          </h2>
          <p>Lorem ipsum</p>
          <a href="#">View All Products</a>
        </TextBox>
        <ImageBox>
          <img src={pepsiImage} alt="" className="pepsi" />
        </ImageBox>
      </Content>
      <Thumb>
        <li>
          <img src={pepsiImage} alt="blue" />
        </li>
        <li>
          <img src={pepsiImage2} alt="gray" />
        </li>
        <li>
          <img src={pepsiImage3} alt="black" />
        </li>
      </Thumb>
      <SectionIcons>
        <li>
          <img src={iconInst} alt="" />
        </li>
        <li>
          <img src={iconTw} alt="" />
        </li>
        <li>
          <img src={iconFB} alt="" />
        </li>
      </SectionIcons>
    </Container>
  );
};

export default Landing;
