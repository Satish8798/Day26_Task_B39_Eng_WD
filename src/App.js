import {useState} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Add } from './Add';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { EditDetails } from './EditDetails';
import { Home } from './Home';
import { Navigation } from './Navigation';
import {User} from './Home'

const initialUserList=[
  {
    name: 'Satish',
    age:24,
    gender: 'Male',
  },
  {
    name: 'Ganesh',
    age:61,
    gender: 'Male',
  },
  {
    name: 'Kala',
    age:58,
    gender: 'Female',
  },
  {
    name: 'Mithun',
    age:26,
    gender: 'Male',
  },
  {
    name: 'Raja',
    age:25,
    gender: 'Male',
  },
  {
    name: 'Kiran',
    age:22,
    gender: 'Male',
  },
  {
    name: 'Maneesha',
    age:28,
    gender: 'Female',
  },
  {
    name: 'Teja',
    age:26,
    gender: 'Male',
  },
  {
    name: 'Tejaswi',
    age:22,
    gender: 'Female',
  },
  {
    name: 'harthik',
    age:23,
    gender: 'male',
  },
  {
    name: 'Jagadeesh',
    age:26,
    gender: 'Male',
  },
  {
    name: 'Kiran',
    age:26,
    gender: 'Male',
  },
  {
    name: 'Maneesh',
    age:23,
    gender: 'Male',
  }
];

function App() {

  const navigate=useNavigate();
  const [userList,setUserList]=useState(initialUserList);

  function handleAdd(name,age,gender){
    let newUser={
      name: name,
      age: age,
      gender: gender
    }
    setUserList([...userList,newUser])
    navigate('/users');
  }

  function handleDelete(id){
    userList.splice(id,1);
    setUserList(userList);
    navigate('/users');
  }

  function handleEdit(name,age,gender,id){
     let editedUser={
      name: name,
      age: age,
      gender: gender
    }
    userList.splice(id,1,editedUser)
    setUserList(userList); 
    navigate('/users');
  }

  return (
    <div className="App">
      <Navigation/>
      <hr/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/users" element={<Home userList={userList}/>} />
        <Route path="/add-user" element={<Add handleAdd={handleAdd}/>} />
        <Route path="/delete-user" element={<Delete handleDelete={handleDelete} count={userList.length}/>} />
        <Route path="/edit-user" element={<Edit count={userList.length}/>} />
        <Route path="/edit/:id" element={<EditDetails handleEdit={handleEdit} userList={userList}/>}/>
        <Route path="/users/user/:id" element={<User userList={userList}/>}/>
      </Routes>
    </div>
  );
}

function Dashboard(){
  return(
    <div className="dashboard">
      <h1>Welcome to CRUD APP on Users List.</h1>
    </div>
  );
}

export default App;
