import { FaEdit, FaTrash } from "react-icons/fa";

const UserList = () => {
  const users = [
    {
      id: "1",
      ime: "Igor",
      email: "example@example.com",
    },
    {
      id: "2",
      ime: "Ivan",
      email: "primjer@primjer.com",
    },
  ];

  const renderCard = () =>
    users.map((user) => (
      <div>
        <div>
          <h2>{user.ime}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <FaEdit />
          <FaTrash />
        </div>
      </div>
    ));

  return <div>{users.length ? renderCard() : <p>Nema korisnika</p>}</div>;
};

export default UserList;
