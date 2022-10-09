
export function Add({ handleAdd }) {
  let name = null;
  let age = null;
  let gender = null;

  return (
    <div className="add-form">
      <input type="text" placeholder='enter name...' onChange={(event) => {
        name = event.currentTarget.value;
      }} />
      <input type="text" placeholder='enter age...' onChange={(event) => {
        age = event.currentTarget.value;
      }} />
      <input type="text" placeholder='enter gender...' onChange={(event) => {
        gender = event.currentTarget.value;
      }} />
      <button onClick={() => {
        handleAdd(name, age, gender);
      }}>Add User</button>
    </div>
  );
}
