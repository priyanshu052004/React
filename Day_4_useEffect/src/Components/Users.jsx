
import { useEffect, useState } from "react";
import "../Style/Users.css"

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>


        </thead>
        <tbody>
          {users.map((U)=>(
            <tr key={U.id}>
              <td>{U.id}</td>
              <td>{U.name}</td>
              <td>{U.email}</td>
              <td>{U.address.city}</td>
            </tr>
          ))}

         




        </tbody>




      </table>
      
     
    </div>
  );
}

export default Users;
