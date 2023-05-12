import styled from "styled-components";
import Bg from "../../assets/bg.png";
import { Link } from "react-router-dom";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  background-color: rgba(46, 138, 255, 0.3);
  color: rgba(46, 138, 255, 0.3);
  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 15rem 1fr;
  }
`;

export const Sidebar = styled.div`
  height: 100vh;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  line-height: 3.5rem;
`;

export const LinkLogo = styled(Link)`
  margin: 3rem 0.5rem;
  height: 2.25rem;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
`;
export const Content = styled.div``;

export const Main = styled.div``;

export const LinkNavSidebar = styled(Link)`
  font-size: 1.75rem;
  text-decoration: none;
  line-height: 4rem;
  width: fit-content;
  margin-left: 1rem;
  &:hover {
    color: blue;
    text-decoration: underline;
  }
`;
export const Span = styled.span`
  margin-left: 1rem;
`;
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 2rem 1rem 0;
`;

export const Footer = styled.div`
  width: calc(100% - 20rem);
  position: absolute;
  top: 100%;
  transform: translateY(-100%);
  text-align: center;
  color: BLUE;
  padding: 0.62rem 0;
  background-color: #019cdf;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 15rem);
  }
`;


