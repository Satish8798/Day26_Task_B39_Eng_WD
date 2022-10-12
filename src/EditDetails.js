import { useState } from "react";
import { useParams } from "react-router-dom";

export function EditDetails({ handleEdit, userList }) {

  const { id } = useParams();
  let [name,setName]=useState(userList[id].name);
  let [age,setAge]=useState(userList[id].age);
  let [gender,setGender]=useState(userList[id].gender);

  return (
    <div className="edit-form">
      <input type="text" value={name} onChange={(event) => {
        setName(event.currentTarget.value)
/*         name = event.currentTarget.value;
 */      }} />
      <input type="text" value={age} onChange={(event) => {
        setAge(event.currentTarget.value)
        /* age = event.currentTarget.value; */
      }} />
      <input type="text" value={gender} onChange={(event) => {
        setGender(event.currentTarget.value)
       /*  gender = event.currentTarget.value; */
      }} />
      <button onClick={() => {
        handleEdit(name, age, gender, id);
      }}>Confirm Edit</button>
    </div>
  );
}
