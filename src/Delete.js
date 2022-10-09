export function Delete({ handleDelete }) {
  let keyid = null;

  return (
    <div className="delete-form">
      <input type="text" placeholder='enter key id...' onChange={(event) => {
        keyid = event.currentTarget.value;
      }} />
      <button onClick={() => {
        handleDelete(keyid);
      }}>Delete User</button>
    </div>
  );
}
