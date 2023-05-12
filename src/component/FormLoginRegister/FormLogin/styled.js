import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div``;

export const Login = styled.div`
  grid-gap: 0.5rem;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 7rem 4rem;
  background: #ffffff;
`;

export const InputLogin = styled(Input)`
  height: 3.25rem;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  font-family: "Lobster", cursive;
  margin: 0 0 2rem 0;
  color: #636e72;
`;
