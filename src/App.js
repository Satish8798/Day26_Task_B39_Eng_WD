import {useState} from 'react';
import { Routes, Route, Link,useParams,useNavigate } from "react-router-dom";
import { Add } from './Add';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { Home } from './Home';

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
    navigate('/');
  }

  function handleDelete(id){
    userList.splice(id,1);
    setUserList(userList);
    navigate('/');
  }

  function handleEdit(name,age,gender,id){
     let editedUser={
      name: name,
      age: age,
      gender: gender
    }
    userList.splice(id,1,editedUser)
    setUserList(userList); 
    navigate('/');
  }

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home userList={userList}/>} />
        <Route path="/add" element={<Add handleAdd={handleAdd}/>} />
        <Route path="/delete" element={<Delete handleDelete={handleDelete}/>} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/edit/:id" element={<EditDetails handleEdit={handleEdit} userList={userList}/>}/>
      </Routes>
    </div>
  );
}

function EditDetails({handleEdit,userList}){

  const { id } =useParams();
  let name=null;
  let age=null;
  let gender=null;

  return(
    <div className="edit-form">
      <input type="text" placeholder={userList[id].name} onChange={(event) => {
      name = event.currentTarget.value;
    }} />
    <input type="text" placeholder={userList[id].age} onChange={(event) => {
      age = event.currentTarget.value;
    }} />
    <input type="text" placeholder={userList[id].gender} onChange={(event) => {
      gender = event.currentTarget.value;
    }} />
    <button onClick={()=>{
      handleEdit(name,age,gender);
    }}>Confirm Edit</button>
    </div>
  );
}

function Navigation(){
  return(
    <div className="navigation-menu">
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li><Link to="/add">ADD</Link></li>
        <li><Link to="/delete">DELETE</Link></li>
        <li><Link to="/edit">EDIT</Link></li>
      </ul>
    </div>
  );
}

export default App;
