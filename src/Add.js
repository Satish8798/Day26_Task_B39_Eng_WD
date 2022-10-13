import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function Add({ handleAdd }) {
  let name = null;
  let age = null;
  let gender = null;

  return (
    <div className="add">
      <form className='add-form'>
      <TextField className='text-field' id="outlined-basic" label="Name" variant="outlined" onChange={(event) => {
        name = event.currentTarget.value;
      }} />
      <TextField className='text-field' id="outlined-basic" label="Age" variant="outlined" onChange={(event) => {
        age = event.currentTarget.value;
      }} />
      <TextField className='text-field' id="outlined-basic" label="Gender" variant="outlined" onChange={(event) => {
        gender = event.currentTarget.value;
      }} />
      <Button className='add-btn' variant="contained" onClick={() => {
        handleAdd(name, age, gender);
      }}>Add User</Button>
      </form>
    </div>
  );
}
