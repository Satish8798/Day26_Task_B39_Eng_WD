import { useNavigate,useParams } from "react-router-dom";
import Button from '@mui/material/Button'


export function Home({ userList }) {

  return (
    <div className="user-list">
      {userList.map((user, id) => (
        <Users user={user} keyid={id} />
      ))}
    </div>
  );
}
function Users({ user, keyid }) {

  const nav=useNavigate();

  return (
    <div className="user-container">
      <h3 className="user-name">Name: {user.name}</h3>
      <p className="user-age">Age: {user.age}</p>
      <p className="user-gender">Gender: {user.gender}</p>
      <p className="user-id">ID: {keyid}</p>
      <Button variant="contained" size="small" color="success" onClick={
        ()=>{
          nav('/users/user/'+keyid);
        }
      }>
        View Profile
      </Button>
    </div>
  );
}

export function User({userList}){
  
  const {id}=useParams();
  const nav=useNavigate();
  return(
    <div className="user-profile">
      <h1>User-{id}</h1>
      <div className="user">
      <h3 className="user-name">Name: {userList[id].name}</h3>
      <p className="user-age">Age: {userList[id].age}</p>
      <p className="user-gender">Gender: {userList[id].gender}</p>
      <Button variant="contained" size="small" color="warning" onClick={
        ()=>{
          nav(-1);
        }
      }>
        Go Back
      </Button>
      </div>
    </div>
  )
}
