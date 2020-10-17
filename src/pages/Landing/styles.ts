import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0062be;
  transition: 0.5s;
`;
export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.image`
  position: relative;
  max-width: 80px;
`;

export const HeaderUL = styled.ul`
  position: relative;
  display: flex;
`;

export const HeaderLI = styled.li`
  list-style: none;

  > a {
    display: inline-block;
    color: #fff;
    font-weight: 100;
    margin-left: 40px;
    text-decoration: none;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextBox = styled.div`
  position: relative;
  max-width: 600px;

  > h2 {
    color: #fff;
    font-size: 4em;
    line-height: 1.5em;
    font-weight: 900;
    text-transform: uppercase;
  }

  > span {
    font-size: 2em;
  }
  > p {
    color: #fff;
  }
  > a {
    display: inline-block;
    margin-top: 20px;
    padding: 8px 20px;
    background-color: #fff;
    color: #111;
    border-radius: 40px;
    font-weight: 500;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export const ImageBox = styled.image`
  width: 600px;
  display: flex;
  padding: 50px;
  margin-top: 50px;
  justify-content: flex-end;

  > img {
    max-width: 260px;
  }
`;
export const Thumb = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
  > li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;
    transition: 0.5s;

    img {
      max-width: 40px;
    }
  }
  > li:hover {
    transform: translateY(-15%);
  }
`;

export const SectionIcons = styled.ul`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  > li {
    list-style: none;

    > a {
      display: inline-block;
      filter: invert(1);
      margin: 5px 0;
      transform: scale(0.6);
    }
  }
`;
