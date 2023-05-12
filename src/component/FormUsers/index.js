import { useEffect, useState } from "react";
import { Modal } from "antd";
import SearchBox from "../Searchbox";
import { AreaButton, ButtonAdd, SearchArea } from "./styled";
import ModalUser from "./ModalUsers";
import TableUser from "./TableUsers";
import axios from "axios";

const DEFAULT_USER = { name: "", email: "", phone: "" };
const FormUser = () => {
  const [formData, setFormData] = useState([DEFAULT_USER]);
  const [dataSource, setDataSource] = useState();
  const [open, setOpen] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);

  const onCreate = () => {
    setFormData(DEFAULT_USER);
    setOpen(true);
  };

  const onEdit = (id) => {
    axios
      .get(`https://642abcfb00dfa3b5474dab62.mockapi.io/User/${id}`)
      .then((res) => {
        setFormData(res.data);
      });
    setOpen(true);
  };
  const onDelete = (id) => {
    Modal.confirm({
      title: "Xóa dữ liệu này?",
      content: "Dữ liệu này sẽ bị xóa vĩnh viễn",
      onOk() {
        axios
          .delete(`https://642abcfb00dfa3b5474dab62.mockapi.io/User/${id}`)
          .then((res) => {
            fetchData();
          });
      },
    });
  };

  const fetchData = () => {
    setTableLoading(true);
    axios
      .get("https://642abcfb00dfa3b5474dab62.mockapi.io/User")
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (id, data) => {
    if (id) {
      axios
        .put(`https://642abcfb00dfa3b5474dab62.mockapi.io/User/${id}`, data)
        .then((res) => {
          setFormData(DEFAULT_USER);
          fetchData();
        });
    } else {
      axios
        .post("https://642abcfb00dfa3b5474dab62.mockapi.io/User", data)
        .then((res) => {
          setFormData(DEFAULT_USER);
          fetchData();
        });
    }
  };
  return (
    <div>
      <AreaButton>
        <ButtonAdd type="primary" onClick={onCreate}>
          New User
        </ButtonAdd>
        <SearchArea>
          <SearchBox />
        </SearchArea>
      </AreaButton>

      <ModalUser
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
      />

      <TableUser
        dataSource={dataSource}
        onEdit={onEdit}
        onDelete={onDelete}
        tableLoading={tableLoading}
        
      />
    </div>
  );
};

export default FormUser;
