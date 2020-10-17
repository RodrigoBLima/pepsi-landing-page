import React from "react";

import {
  Container,
  Content,
  TextBox,
  ImageBox,
  Thumb,
  SectionIcons,
} from "./styles";

import pepsiImage from "../../assets/images/pepsi001.png";

import iconFB from "../../assets/images/facebook.png";
import iconTw from "../../assets/images/twitter.png";
import iconInst from "../../assets/images/instagram.png";

import pepsiImage2 from "../../assets/images/pepsi002.png";
import pepsiImage3 from "../../assets/images/pepsi003.png";
import Header from "../../components/Header";

const Landing: React.FC = () => {
  function handleImageSlider(anything: any) {
    (document.querySelector(".pepsi") as HTMLInputElement).src = anything;
  }

  function handleColor(color: string) {
    const sec = document.querySelector(".sec") as HTMLInputElement;

    sec.style.background = color;
  }

  return (
    <Container className="sec">
      <Header />

      <Content>
        <TextBox>
          <h2>
            That's What'
            <br />
            <span>I Like</span>
          </h2>
          <p>
            é simplesmente uma simulação de texto da indústria tipográfica e de
            impressos, e vem sendo utilizado desde o século XVI, quando um
            impressor desconhecido pegou uma bandeja de tipos e os embaralhou
            para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não
            só a cinco séculos, como também ao salto para a editoração
            eletrônica, permanecendo essencialmente inalterado.{" "}
          </p>
          <a href="#">View All Products</a>
        </TextBox>
        <ImageBox>
          <img src={pepsiImage} alt="" className="pepsi" id="pepsi" />
        </ImageBox>
      </Content>

      <Thumb>
        <li>
          <img
            src={pepsiImage}
            alt="blue"
            onClick={() => {
              handleImageSlider(pepsiImage);
              handleColor("#0062be");
            }}
          />
        </li>
        <li>
          <img
            src={pepsiImage2}
            alt="gray"
            onClick={() => {
              handleImageSlider(pepsiImage2);
              handleColor("#e60c2e");
            }}
          />
        </li>
        <li>
          <img
            src={pepsiImage3}
            alt="black"
            onClick={() => {
              handleImageSlider(pepsiImage3);
              handleColor("#1e1e1e");
            }}
          />
        </li>
      </Thumb>
      <SectionIcons>
        <li>
          <a href="#">
            <img src={iconInst} alt="iconInst" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconTw} alt="iconTw" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={iconFB} alt="iconFB" />
          </a>
        </li>
      </SectionIcons>
    </Container>
  );
};

export default Landing;
