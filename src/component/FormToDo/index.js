import { Button, Modal, Space, Spin, message } from "antd";
import { useEffect, useState } from "react";
import {
  Content,
  H1,
  InputJob,
  ButtonAdd,
  Ul,
  Li,
  Main,
  Jobs,
  JobsDone,
} from "./styled";
import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons";
import axios from "axios";

const FormToDo = () => {
  const [data, setData] = useState({ job: "" });
  const [jobs, setJobs] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [itemloading, setItemloading] = useState(false);

  const fetchData = () => {
    setItemloading(true);
    axios
      .get("https://642abcfb00dfa3b5474dab62.mockapi.io/Products")
      .then((res) => {
        setJobs(res.data);
        setItemloading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const maxJobs = 14;

  const onAdd = () => {
    if (data.job.trim() === "") {
      message.warning("Please enter your jobs! ");
    } else if (jobs.length > maxJobs) {
      message.warning(`You have limited! ${maxJobs + 1} jobs`);
    } else {
      setItemloading(true);
      axios
        .post("https://642abcfb00dfa3b5474dab62.mockapi.io/Products", data)
        .then((res) => {
          setData({ job: "" });
          setJobs([...jobs, res.data]);
          setItemloading(false);
        });
    }
  };

  const onEdit = (job) => {
    setEditingJob(job);
    setData({ job: job.job });
    setEditModalVisible(true);
  };

  const onSaveEdit = () => {
    axios
      .put(
        `https://642abcfb00dfa3b5474dab62.mockapi.io/Products/${editingJob.id}`,
        data
      )
      .then((res) => {
        setEditingJob(null);
        setData({ job: "" });
        setEditModalVisible(false);
        fetchData();
      });
  };

  const onCancelEdit = () => {
    setEditingJob(null);
    setData({ job: "" });
    setEditModalVisible(false);
  };

  const onDelete = (id) => {
    Modal.confirm({
      title: "You want to delete this job?",
      onOk() {
        axios
          .delete(`https://642abcfb00dfa3b5474dab62.mockapi.io/Products/${id}`)
          .then((res) => {
            fetchData();
          });
      },
    });
  };

  const onCheck = (item) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id === item.id) {
        return { ...job, isCompleted: !job.isCompleted };
      } else {
        return job;
      }
    });
    setJobs(updatedJobs);
  };
  return (
    <Content>
      <H1>Don't think, just do it</H1>
      <Main>
        <Space size={5}>
          <InputJob
            onChange={onChange}
            name="job"
            value={data.job}
            placeholder="Enter your job"
          />
          {editingJob ? (
            <Space size={5}>
              <Button type="primary" onClick={onSaveEdit}>
                Save
              </Button>
              <Button type="primary" onClick={onCancelEdit}>
                Cancel
              </Button>
            </Space>
          ) : (
            <ButtonAdd onClick={onAdd}>Add</ButtonAdd>
          )}
        </Space>
        <Spin spinning={itemloading}>
          <Ul>
            {jobs.map((item) => (
              <Li key={item.id}>
                <Jobs>
                  <JobsDone isCompleted={item.isCompleted}>{item.job}</JobsDone>

                  <span>
                    <Button type="link" onClick={() => onCheck(item)}>
                      <CheckOutlined style={{ fontSize: "1.5rem" }} />
                    </Button>

                    <Button type="link" onClick={() => onEdit(item)}>
                      <EditOutlined style={{ fontSize: "1.25rem" }} />
                    </Button>

                    <Button type="link" onClick={() => onDelete(item.id)}>
                      <DeleteOutlined style={{ fontSize: "1.25rem" }} />
                    </Button>
                  </span>
                </Jobs>
              </Li>
            ))}
          </Ul>
        </Spin>
      </Main>
    </Content>
  );
};
export default FormToDo;
