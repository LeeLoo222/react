import HOC from "../HOC";

const ListaUsera = ({ podaci }) => {
  let filterUsers = podaci.map((user, index) => {
    return (
      <div key={`${user.id}-${index}`}>
        <p>{user.name}</p>
      </div>
    );
  });

  return <div>{filterUsers}</div>;
};

const SearchUsers = HOC(ListaUsera, "users");

export default SearchUsers;
