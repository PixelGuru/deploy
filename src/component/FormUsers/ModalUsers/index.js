import React, { useEffect } from "react"
import { Form, Input, Modal } from "antd"


const ModalUser = ({ open, setOpen, onSubmit, formData }) => {
  const [form] = Form.useForm()
  const onOk = async () => {
    const value = await form.validateFields()
    onSubmit(formData.id, value)
    setOpen(false)
  }

  useEffect(() => {
    if (open && formData.id) {
      form.setFieldsValue(formData)
    }
  }, [open, formData])

  useEffect(() => {
    if (!open) {
      form.resetFields()
    }
  }, [open])

  const onCancel = () => {
    setOpen(false)
  }

  return (
    <div>
      <Modal title="New User" open={open} onOk={onOk} onCancel={onCancel}>
        <Form form={form} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{required: true, message:"Vui lòng nhập dữ liệu"}]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ModalUser
