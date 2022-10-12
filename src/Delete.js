export function Delete({ handleDelete,count }) {
  let keyid = null;

  return (
    <div className="delete-form">
      <input type="text" placeholder='enter key id...' onChange={(event) => {
        keyid = event.currentTarget.value;
      }} />
      <button onClick={() => {
        if(keyid>count-1){
          alert('Enter valid key!');
        }else{
          handleDelete(keyid);
        }
      }}>Delete User</button>
    </div>
  );
}
