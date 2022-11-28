import { useState } from "react";
import { Space, Modal, Input } from "antd";
import { post } from "../../services";

const ModalRegister = ({ fetchUsers }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
  })

  const handleOpenModal = () => setIsModalOpen(!isModalOpen);

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  const handleOnSubmit = async () => {
    const { data } = await post("/user", user);

    // enviar datos al localstorage
    localStorage.setItem("user", JSON.stringify(data));

    handleOpenModal();
    await fetchUsers();
  }

  return (
    <>
      <Modal
        title="Ingresa o registrate"
        open={isModalOpen}
        onOk={handleOnSubmit}
        onCancel={handleOpenModal}
      >
        <Space
          size="large"
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Input size="large" placeholder="Ingresa tu correo" 
            name="email"
            onChange={handleOnChange}
          />
          <Input size="large" placeholder="Ingresa tu nombre" 
            name="name"
            onChange={handleOnChange}
          />
        </Space>
      </Modal>
    </>
  );
};

export default ModalRegister;
