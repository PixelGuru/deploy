import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import React, { useState } from "react";
import {
  Container,
  Main,
  AreaChange,
  ButtonChange,
  Content,
  Contain,
  ImageLogo,
  Span,
  H6,
} from "./styled";
import Logo from "../../assets/Logo_GA.png";

const FormLoginRegister = () => {
  const [active, setActive] = useState("FormLogin");
  const onClick = () => {
    setActive(active === "FormLogin" ? "FormRegister" : "FormLogin");
  };

  return (
    <Container>
      <Contain>
        <AreaChange>
          <ImageLogo>
            <img src={Logo} style={{ width: "20rem" }} alt="Logo" />
          </ImageLogo>
          {active === "FormLogin" ? (
            <Content>
              <div>
                <H6>WELCOME BACK</H6> <br />
               You don't have an account ?
                <ButtonChange onClick={onClick} type="link">
                  <Span>Sign up here</Span>
                </ButtonChange>
              </div>
            </Content>
          ) : (
            <Content>
              <div>
                <H6>WELCOME</H6>
                <br />
                You already have an account ?
                <ButtonChange onClick={onClick} type="link">
                  <Span>Login here</Span>
                </ButtonChange>
              </div>
            </Content>
          )}
        </AreaChange>
        <Main>
          {active === "FormLogin" && <FormLogin />}
          {active === "FormRegister" && <FormRegister />}
        </Main>
      </Contain>
    </Container>
  );
};

export default FormLoginRegister;
