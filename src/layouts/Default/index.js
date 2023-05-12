import {
  Sidebar,
  Footer,
  Layout,
  Main,
  Header,
  LinkLogo,
  Img,
  LinkNavSidebar,
  Span,
  Content,
} from "./styled";
import Logo from "../../assets/Logo_GA.png";

import { BorderLeftOutlined, UserOutlined } from "@ant-design/icons";
import Author from "./Author";

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Sidebar>
        <LinkLogo to="https://www.greenacademy.edu.vn/">
          <Img src={Logo} />
        </LinkLogo>

        <LinkNavSidebar to="/todo">
          <BorderLeftOutlined />
          <Span>To Do</Span>
        </LinkNavSidebar>
        <LinkNavSidebar to="/users">
          <UserOutlined />
          <Span>Users</Span>
        </LinkNavSidebar>
      </Sidebar>
      <Content>
        <Header>
          <Author />
        </Header>

        <Main>{children}</Main>
        <Footer>
          <span>POWER BY QUANG DUY GREEN ACADEMY 2023</span>
        </Footer>
      </Content>
    </Layout>
  );
};
export default DefaultLayout;
