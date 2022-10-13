import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function Edit({ count }) {
  let id = null;
  const navigate=useNavigate();
  return (
    <div className="edit-form">
 
        <TextField className='text-field' id="outlined-basic" label="Key" variant="outlined" onChange={(event) => {
          id = event.currentTarget.value;
        }} />
        <Button className='edit-btn' variant="contained" onClick={() => {
          if(id>count-1){
            alert('Enter valid key!');
          }else{
            navigate("/Edit/" + id)
          }
        }}>Edit User</Button>

    </div>
  );
}

