import { Input, Button } from "antd";
import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  line-height: 3rem;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 3em;
  font-family: "Noto Serif", serif;
  margin: 2rem 0;
  color: #d9655a;
  text-align: center;
  
`;

export const InputJob = styled(Input)`
  width: 25rem;
  height: 2.5rem;
  font-size: 1.25rem;
  margin-left: 2rem;
`;
export const ButtonAdd = styled(Button)`
  height: 2.5rem;
  font-size: 1.25rem;
`;
export const Ul = styled.ul`
  margin-left: 3.5rem;
`;
export const Li = styled.li`
  list-style: decimal;
  text-decoration: none;
  line-height: 2rem;
  margin: 0.5rem 0;
  font-size: 1.5rem;
`;

export const Main = styled.div`
  color: black;
  font-size: 1.5rem;
  height: 72vh;
`;

export const Jobs = styled.div`
  border-radius: 0.5rem;
  width: 50%;
  background: #f6e58d;
  display: flex;
  padding-left: 0.5rem;
  justify-content: space-between;
  @media screen and (max-width: 1020px) {
    width: 100%;
  }
`;

export const JobsDone = styled.span`
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;
