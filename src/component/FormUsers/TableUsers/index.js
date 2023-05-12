import { Button, Table } from "antd";
import { TableFormUser } from "./styled";
const TableUser = ({ onEdit, onDelete, dataSource, tableLoading }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "age",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      dataIndex: "acyion",
      render: (text, item) => {
        return (
          <span>
            <a
              style={{ marginRight: "0.5rem" }}
              onClick={() => {
                onEdit(item.id);
              }}
            >
              Edit
            </a>
            |
            <a
              style={{ marginLeft: "0.5rem" }}
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Delete
            </a>
          </span>
        );
      },
    },
  ];
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      loading={tableLoading}
      style={{ overflowY: "auto", height:'690px' }}
    />
  );
};
export default TableUser;
