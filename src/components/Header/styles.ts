import styled from 'styled-components';


export const HeaderContainer = styled.div`
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

  > li {
    list-style: none;

    > a {
      display: inline-block;
      color: #fff;
      font-weight: 100;
      margin-left: 40px;
      text-decoration: none;
    }
  }
`;
