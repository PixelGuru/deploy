import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, message } from "antd";
import { Container, Toggle, InputLogin, Login, H1 } from "./styled";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onLogin = async () => {
    const values = await form.validateFields();
    if (values.username === "admin" && values.password == "admin123") {
      localStorage.setItem("token", `${values.username}${values.password}`);
      navigate("/todo");
    } else {
      message.error("thong tin dang nhap khong hop le");
    }
  };
  return (
    <Container>
      <Login>
        <H1>Login</H1>
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please enter your Email!",
              },
            ]}
          >
            <InputLogin
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your Password!",
              },
            ]}
          >
            <InputLogin
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox >Remember me</Checkbox>
            </Form.Item>

            <a style={{ color: "blue" }} className="login-form-forgot" href="">
              Forgot password?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={onLogin}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Login>
    </Container>
  );
};
export default FormLogin;
