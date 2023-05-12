import { useNavigate } from "react-router-dom";
import { Avatar, Dropdown, Space } from "antd";
import { Name, Role, User } from "./styled";
import { UserOutlined } from "@ant-design/icons";

const Author = () => {
  const navigate = useNavigate();
  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "0",
            label: <a>Setting</a>,
          },
          {
            key: "1",
            label: <a onClick={onLogout}>Log out</a>,
          },
        ],
      }}
    >
      <User>
        <Space wrap size={20}>
          <Avatar size={55} icon={<UserOutlined />} />
          <div>
            <Role>Admin</Role>
            <Name>Administrator</Name>
          </div>
        </Space>
      </User>
    </Dropdown>
  );
};
export default Author;
