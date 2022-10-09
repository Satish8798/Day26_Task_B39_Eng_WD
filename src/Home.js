export function Home({ userList }) {

  return (
    <div className="user-list">
      {userList.map((user, id) => (
        <User user={user} keyid={id} />
      ))}
    </div>
  );
}
function User({ user, keyid }) {
  return (
    <div className="user-container">
      <h3 className="user-name">Name: {user.name}</h3>
      <p className="user-age">Age: {user.age}</p>
      <p className="user-gender">Gender: {user.gender}</p>
      <p className="user-id">ID: {keyid}</p>
    </div>
  );
}
