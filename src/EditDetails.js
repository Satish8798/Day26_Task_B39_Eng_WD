import { useState } from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function EditDetails({ handleEdit, userList }) {

  const { id } = useParams();
  let [name,setName]=useState(userList[id].name);
  let [age,setAge]=useState(userList[id].age);
  let [gender,setGender]=useState(userList[id].gender);

  return (
    <div className="edit-form">
      <TextField className='text-field' value={name} id="outlined-basic" label="Name" variant="outlined" onChange={(event) => {
       setName(event.currentTarget.value)
      }} />
      <TextField className='text-field' value={age} id="outlined-basic" label="Age" variant="outlined" onChange={(event) => {
         setAge(event.currentTarget.value)
      }} />
      <TextField className='text-field' value={gender} id="outlined-basic" label="Gender" variant="outlined" onChange={(event) => {
        setGender(event.currentTarget.value);
      }} />
      <Button className='edit-btn' variant="contained" onClick={() => {
        handleEdit(name, age, gender, id);
      }}>Confirm Edit</Button>
    </div>
  );
}
