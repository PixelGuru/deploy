import { Button } from "antd";
import styled from "styled-components";
import Bg from "../../assets/pxfuel.jpg";

export const Container = styled.div`
  background-image: url(${Bg});
  width: 100%;
  height: 100vh;
  background-size: cover;
`;
export const Contain = styled.div`
  display: grid;
  grid-template-columns: 30rem 30rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Main = styled.div`
  width: 30rem;
  
  color: black;
`;
export const ButtonChange = styled(Button)`
  font-size: 1.5rem;
  color: #ffffff;
  padding: 0 0.5rem;
  font-family: 'Roboto', sans-serif;
`;
export const Content = styled.div`
font-family: 'Roboto', sans-serif;
 
`;
export const AreaChange = styled.div`
  width: 30rem;
  font-size: 1.5rem;
  height: 500px;
  padding-left: 2rem;
  background: rgba(60, 19, 82, 0.7);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #ffffff;
`;
export const ImageLogo = styled.div`
  padding 4rem 0;
`;
export const Span = styled.span`
  text-decoration: underline;
  color: #009BDF;
`;
export const H6 = styled.h6`
  font-size: 3rem;
  text-align: center;
`;
