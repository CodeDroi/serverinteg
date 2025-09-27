import { useState, useEffect } from "react";
import axios from 'axios'

//Viewing
export function ServerInteg(){ 
    const [users, setUsers] = useState([])

useEffect(() => { 
    axios.get("http://localhost:8080/api/getUsers")
    .then((response) => {
      console.log(response.data)
      setUsers(response.data); // Set the state with the fetched users
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return(
    <>
    <h1>User List</h1>
      {users.map(user => (
        <li key={user._id}>
          {user.name}
         
        </li>
    ))}
    </>
  )
}

//Delete
export function ServerInteg1(){
    const [users, setUsers] = useState([])

useEffect(() => { 
    axios.get("http://localhost:8080/api/getUsers")
    .then((response) => {
      console.log(response.data)
      setUsers(response.data); // Set the state with the fetched users
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const handleDeleteUser = (id) => {
    axios.delete(`http://localhost:8080/api/deleteUser/${id}`)
     .then(() => {
      setUsers(users.filter(user => user._id !== id));
     })
     .catch((error) => {
      console.log(error);
     });
   };

  return(
    <>
    <h1>User List</h1>
      {users.map(user => (
        <li key={user._id}>
          {user.name}
            <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
        </li>
    ))}
    </>
  )

}

//Create and Update
export function ServerInteg2(){
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({})
    const [editUser, setEditUser] = useState(null)

  useEffect(() => { //viewing
      axios.get("http://localhost:8080/api/getUsers")
      .then((response) => {
        console.log(response.data)
        setUsers(response.data); // Set the state with the fetched users
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

  const handleDeleteUser = (id) => { //deletion
    axios.delete(`http://localhost:8080/api/deleteUser/${id}`)
     .then(() => {
      setUsers(users.filter(user => user._id !== id));
     })
     .catch((error) => {
      console.log(error);
     });
   };

  const fetchUsers = () => {
   axios.get("http://localhost:8080/api/getUsers")
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    fetchUsers()
   },[])

  const handleCreateUser = () =>{
    axios.post("http://localhost:8080/api/createUser", newUser)
      .then(() => {
        fetchUsers()
        setNewUser({name: '', age: '', email: ''})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleUpdateUser = (id) => {
     axios.put(`http://localhost:8080/api/updateUser/${id}`, editUser)
        .then(() => {
          fetchUsers();
          setEditUser(null);
        })
        .catch((error) => {
          console.log(error);
        });
   };

 

  return(
    <div>
      <div>
        <h1>User List</h1>
          {users.map(user => (
            <li key={user._id}>
              {user.name} - {user.age} - {user.email}
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
            </li>
        ))}
      </div>
      <div>
          <h2>Create User</h2>
         <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
         />
         <input
            type="number"
            placeholder="Age"
            value={newUser.age}
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
         />
         <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
         />
         <button onClick={handleCreateUser}>Create</button>
         <div>
          
         </div>
      </div>
      <div>
        {editUser && (
          <div>
             <h2>Edit User</h2>
             <input
               type="text"
               placeholder="Name"
               value={editUser.name}
               onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
             />
             <input
               type="number"
               placeholder="Age"
               value={editUser.age}
               onChange={(e) => setEditUser({ ...editUser, age: e.target.value })}
             />
             <input
               type="email"
               placeholder="Email"
               value={editUser.email}
               onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
             />
             <button onClick={() => handleUpdateUser(editUser._id)}>Update</button>
             <button onClick={() => setEditUser(null)}>Cancel</button>
          </div>
        )}


      </div>
    </div>  
  )

}






