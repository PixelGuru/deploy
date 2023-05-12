import { Form, Input, Button, Select } from "antd";
import { Register, H1 } from "./styled";
// tao form dang ky voi email, passsword, confirm, phone, country
const FormRegister = () => {
  const [form] = Form.useForm();
  const onSubmit = async () => {
    const values = await form.validateFields();
    console.log(values);
    // do somethings
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 70 }}
        options={[
          { value: "84", label: "+84" },
          { value: "65", label: "+65" },
        ]}
      />
    </Form.Item>
  );
  return (
    <Register>
      <H1>Register</H1>
      <Form form={form} layout="vertical">
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            { required: true, message: "Please enter your Email!" },
            { type: "username" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve(); //true
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={onSubmit}>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </Register>
  );
};

export default FormRegister;
