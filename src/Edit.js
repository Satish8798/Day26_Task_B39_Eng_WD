import { useNavigate } from "react-router-dom";

export function Edit({ handleEdit }) {
  /* let name = null;
  let age = null;
  let gender = null; */
  let id = null;
  const navigate=useNavigate();
  return (
    <div className="add-form">
     {/*  <input type="text" placeholder='enter name...' onChange={(event) => {
        name = event.currentTarget.value;
      }} />
      <input type="text" placeholder='enter age...' onChange={(event) => {
        age = event.currentTarget.value;
      }} />
      <input type="text" placeholder='enter gender...' onChange={(event) => {
        gender = event.currentTarget.value;
      }} /> */}
      <input type="text" placeholder='enter key id...' onChange={(event) => {
        id = event.currentTarget.value;
      }} />
      <button onClick={() => {
        navigate("/Edit/" + id)
      }}>Edit User</button>
    </div>
  );
}

